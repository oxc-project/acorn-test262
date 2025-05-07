__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 409,
  "end": 626,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 409,
      "end": 465,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 465,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 423,
            "end": 463,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 434,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 434,
              "end": 463,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 437,
                "end": 463,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 447,
                    "end": 457,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 454,
                      "end": 456,
                      "properties": []
                    }
                  }
                ]
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 467,
      "end": 626,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 485,
        "end": 626,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 624,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 502,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 502,
              "end": 624,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 505,
                "end": 624,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 515,
                    "end": 536,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 519,
                        "end": 535,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 519,
                          "end": 524,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 527,
                          "end": 535,
                          "raw": "\"uh-oh?\"",
                          "value": "uh-oh?",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 545,
                    "end": 571,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 570,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 557,
                          "end": 569,
                          "raw": "\"ruh-roh...\"",
                          "value": "ruh-roh...",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 556,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 552,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 556,
                          "decorators": [],
                          "name": "log",
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
                    "start": 580,
                    "end": 588,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 580,
                      "end": 587,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 580,
                        "end": 585
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 597,
                    "end": 618,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 597,
                      "end": 617,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 609,
                          "end": 616,
                          "raw": "\"d'oh!\"",
                          "value": "d'oh!",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 597,
                        "end": 608,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 604,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 608,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 474,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 483,
        "end": 484,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
