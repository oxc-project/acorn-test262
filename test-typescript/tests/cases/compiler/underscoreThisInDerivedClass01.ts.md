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
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 465,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 423,
            "end": 463,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 434,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 434,
              "end": 463,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 467,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 474,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 483,
        "end": 484,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 485,
        "end": 626,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 624,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 502,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 502,
              "end": 624,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 519,
                          "end": 524,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 556,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 557,
                          "end": 569,
                          "value": "ruh-roh...",
                          "raw": "\"ruh-roh...\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 608,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 609,
                          "end": 616,
                          "value": "d'oh!",
                          "raw": "\"d'oh!\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
