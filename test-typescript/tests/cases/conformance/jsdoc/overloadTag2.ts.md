__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 631,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 545,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 545,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 545,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 42,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "a"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ConditionalExpression",
                "start": 28,
                "end": 42,
                "alternate": {
                  "type": "Literal",
                  "start": 39,
                  "end": 42,
                  "raw": "\"1\"",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                },
                "consequent": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "test": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 49,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 47,
                "end": 49,
                "name": "b"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 478,
              "end": 543,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 478,
                "end": 489,
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
                "start": 489,
                "end": 543,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 496,
                  "end": 543,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 506,
                      "end": 517,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 506,
                        "end": 517,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 506,
                          "end": 513,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 506,
                            "end": 510
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 511,
                            "end": 513,
                            "name": "a"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 526,
                      "end": 537,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 526,
                        "end": 537,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 526,
                          "end": 533,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 526,
                            "end": 530
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 531,
                            "end": 533,
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 551,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 554,
            "end": 563,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 561,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 569,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 572,
            "end": 586,
            "arguments": [
              {
                "type": "Literal",
                "start": 580,
                "end": 585,
                "raw": "'str'",
                "value": "str",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 576,
              "end": 579,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 605,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 592,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 595,
            "end": 605,
            "arguments": [
              {
                "type": "Literal",
                "start": 603,
                "end": 604,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 599,
              "end": 602,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 631,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 611,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 614,
            "end": 631,
            "arguments": [
              {
                "type": "Literal",
                "start": 622,
                "end": 627,
                "raw": "'str'",
                "value": "str",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 618,
              "end": 621,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
