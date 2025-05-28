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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 465,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 423,
            "end": 463,
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
            "value": {
              "type": "FunctionExpression",
              "start": 434,
              "end": 463,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 467,
      "end": 626,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 485,
        "end": 626,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 624,
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
            "value": {
              "type": "FunctionExpression",
              "start": 502,
              "end": 624,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 505,
                "end": 624,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 515,
                    "end": 536,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 519,
                        "end": 535,
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
                          "value": "uh-oh?",
                          "raw": "\"uh-oh?\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 545,
                    "end": 571,
                    "expression": {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 570,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 556,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 552,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 556,
                          "decorators": [],
                          "name": "log",
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
                          "start": 557,
                          "end": 569,
                          "value": "ruh-roh...",
                          "raw": "\"ruh-roh...\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 580,
                    "end": 588,
                    "expression": {
                      "type": "CallExpression",
                      "start": 580,
                      "end": 587,
                      "callee": {
                        "type": "Super",
                        "start": 580,
                        "end": 585
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 597,
                    "end": 618,
                    "expression": {
                      "type": "CallExpression",
                      "start": 597,
                      "end": 617,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 597,
                        "end": 608,
                        "object": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 604,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 608,
                          "decorators": [],
                          "name": "log",
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
                          "start": 609,
                          "end": 616,
                          "value": "d'oh!",
                          "raw": "\"d'oh!\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
