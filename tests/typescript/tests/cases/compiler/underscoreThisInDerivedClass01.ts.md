__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 434
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 454,
                      "end": 456
                    },
                    "start": 447,
                    "end": 457
                  }
                ],
                "start": 437,
                "end": 463
              },
              "expression": false,
              "start": 434,
              "end": 463
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 423,
            "end": 463
          }
        ],
        "start": 417,
        "end": 465
      },
      "abstract": false,
      "declare": false,
      "start": 409,
      "end": 465
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 474
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 484
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 502
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 519,
                          "end": 524
                        },
                        "init": {
                          "type": "Literal",
                          "value": "uh-oh?",
                          "raw": "\"uh-oh?\"",
                          "start": 527,
                          "end": 535
                        },
                        "definite": false,
                        "start": 519,
                        "end": 535
                      }
                    ],
                    "declare": false,
                    "start": 515,
                    "end": 536
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 556
                        },
                        "optional": false,
                        "computed": false,
                        "start": 545,
                        "end": 556
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "ruh-roh...",
                          "raw": "\"ruh-roh...\"",
                          "start": 557,
                          "end": 569
                        }
                      ],
                      "optional": false,
                      "start": 545,
                      "end": 570
                    },
                    "directive": null,
                    "start": 545,
                    "end": 571
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 580,
                        "end": 585
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 580,
                      "end": 587
                    },
                    "directive": null,
                    "start": 580,
                    "end": 588
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 604
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 608
                        },
                        "optional": false,
                        "computed": false,
                        "start": 597,
                        "end": 608
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "d'oh!",
                          "raw": "\"d'oh!\"",
                          "start": 609,
                          "end": 616
                        }
                      ],
                      "optional": false,
                      "start": 597,
                      "end": 617
                    },
                    "directive": null,
                    "start": 597,
                    "end": 618
                  }
                ],
                "start": 505,
                "end": 624
              },
              "expression": false,
              "start": 502,
              "end": 624
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 491,
            "end": 624
          }
        ],
        "start": 485,
        "end": 626
      },
      "abstract": false,
      "declare": false,
      "start": 467,
      "end": 626
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 409,
  "end": 626
}
```
