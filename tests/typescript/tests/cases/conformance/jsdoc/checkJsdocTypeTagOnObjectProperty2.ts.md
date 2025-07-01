__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lol",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 17,
          "end": 20
        }
      ],
      "declare": false,
      "start": 13,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 77,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 72,
                "end": 79
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 132
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 135
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "42",
                          "raw": "\"42\"",
                          "start": 152,
                          "end": 156
                        },
                        "start": 145,
                        "end": 157
                      }
                    ],
                    "start": 137,
                    "end": 161
                  },
                  "expression": false,
                  "start": 132,
                  "end": 161
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 125,
                "end": 161
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 214
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 219
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "lol",
                    "raw": "\"lol\"",
                    "start": 224,
                    "end": 229
                  },
                  "id": null,
                  "generator": false,
                  "start": 216,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arrowFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 284
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 290
                      },
                      "right": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 291,
                        "end": 294
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 294
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 302
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 305,
                      "end": 307
                    },
                    "start": 299,
                    "end": 307
                  },
                  "id": null,
                  "generator": false,
                  "start": 286,
                  "end": 307
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 307
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 338
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 338
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 335,
                "end": 338
              }
            ],
            "start": 34,
            "end": 340
          },
          "definite": false,
          "start": 28,
          "end": 340
        }
      ],
      "declare": false,
      "start": 22,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "lol",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 344
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 347,
          "end": 355
        },
        "start": 341,
        "end": 355
      },
      "directive": null,
      "start": 341,
      "end": 355
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 389
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method1",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 397
              },
              "optional": false,
              "computed": false,
              "start": 386,
              "end": 397
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 398,
                "end": 399
              }
            ],
            "optional": false,
            "start": 386,
            "end": 400
          },
          "definite": false,
          "start": 382,
          "end": 400
        }
      ],
      "declare": false,
      "start": 378,
      "end": 401
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 431
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method2",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 434,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 446,
                "end": 449
              }
            ],
            "optional": false,
            "start": 434,
            "end": 450
          },
          "definite": false,
          "start": 429,
          "end": 450
        }
      ],
      "declare": false,
      "start": 425,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 451
}
```
