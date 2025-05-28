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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 545,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 545,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 42,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "a"
              },
              "typeAnnotation": null,
              "value": {
                "type": "ConditionalExpression",
                "start": 28,
                "end": 42,
                "test": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "value": true,
                  "raw": "true"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 1,
                  "raw": "1"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 39,
                  "end": 42,
                  "value": "1",
                  "raw": "\"1\""
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 49,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 47,
                "end": 49,
                "name": "b"
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 478,
              "end": 543,
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
              "value": {
                "type": "FunctionExpression",
                "start": 489,
                "end": 543,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 496,
                  "end": 543,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 506,
                      "end": 517,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 506,
                        "end": 517,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 506,
                          "end": 513,
                          "object": {
                            "type": "ThisExpression",
                            "start": 506,
                            "end": 510
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 511,
                            "end": 513,
                            "name": "a"
                          },
                          "optional": false,
                          "computed": false
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 526,
                      "end": 537,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 526,
                        "end": 537,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 526,
                          "end": 533,
                          "object": {
                            "type": "ThisExpression",
                            "start": 526,
                            "end": 530
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 531,
                            "end": 533,
                            "name": "b"
                          },
                          "optional": false,
                          "computed": false
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 563,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 563,
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
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 561,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 586,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 586,
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
            "callee": {
              "type": "Identifier",
              "start": 576,
              "end": 579,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 580,
                "end": 585,
                "value": "str",
                "raw": "'str'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 605,
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
            "callee": {
              "type": "Identifier",
              "start": 599,
              "end": 602,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 603,
                "end": 604,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 631,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 631,
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
            "callee": {
              "type": "Identifier",
              "start": 618,
              "end": 621,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 622,
                "end": 627,
                "value": "str",
                "raw": "'str'"
              },
              {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
