__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "a",
                "start": 23,
                "end": 25
              },
              "typeAnnotation": null,
              "value": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 28,
                  "end": 32
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 35,
                  "end": 36
                },
                "alternate": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 39,
                  "end": 42
                },
                "start": 28,
                "end": 42
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 23,
              "end": 42
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "b",
                "start": 47,
                "end": 49
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
              "accessibility": null,
              "start": 47,
              "end": 49
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 489
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 506,
                            "end": 510
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "start": 511,
                            "end": 513
                          },
                          "optional": false,
                          "computed": false,
                          "start": 506,
                          "end": 513
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 517
                        },
                        "start": 506,
                        "end": 517
                      },
                      "directive": null,
                      "start": 506,
                      "end": 517
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 526,
                            "end": 530
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "start": 531,
                            "end": 533
                          },
                          "optional": false,
                          "computed": false,
                          "start": 526,
                          "end": 533
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "start": 526,
                        "end": 537
                      },
                      "directive": null,
                      "start": 526,
                      "end": 537
                    }
                  ],
                  "start": 496,
                  "end": 543
                },
                "expression": false,
                "start": 489,
                "end": 543
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 478,
              "end": 543
            }
          ],
          "start": 17,
          "end": 545
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 545
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 545
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 551
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 561
            },
            "typeArguments": null,
            "arguments": [],
            "start": 554,
            "end": 563
          },
          "definite": false,
          "start": 550,
          "end": 563
        }
      ],
      "declare": false,
      "start": 546,
      "end": 563
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 569
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 579
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 580,
                "end": 585
              }
            ],
            "start": 572,
            "end": 586
          },
          "definite": false,
          "start": 568,
          "end": 586
        }
      ],
      "declare": false,
      "start": 564,
      "end": 586
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 592
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 602
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 603,
                "end": 604
              }
            ],
            "start": 595,
            "end": 605
          },
          "definite": false,
          "start": 591,
          "end": 605
        }
      ],
      "declare": false,
      "start": 587,
      "end": 605
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 611
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 621
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 622,
                "end": 627
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 629,
                "end": 630
              }
            ],
            "start": 614,
            "end": 631
          },
          "definite": false,
          "start": 610,
          "end": 631
        }
      ],
      "declare": false,
      "start": 606,
      "end": 631
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 631
}
```
