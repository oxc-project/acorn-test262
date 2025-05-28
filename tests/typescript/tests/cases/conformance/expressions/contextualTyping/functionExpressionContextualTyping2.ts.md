__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 662,
  "end": 804,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 662,
      "end": 702,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 702,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 668,
              "end": 702,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 670,
                "end": 702,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 671,
                    "end": 680,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 672,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 674,
                        "end": 680
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 682,
                    "end": 691,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 683,
                      "end": 691,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 685,
                        "end": 691
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 693,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 696,
                    "end": 702
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 703,
      "end": 758,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 707,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 707,
            "end": 757,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 709,
              "end": 757,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 711,
                "end": 757,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 711,
                    "end": 720,
                    "exprName": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 720,
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 724,
                    "end": 756,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 725,
                        "end": 734,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 726,
                          "end": 734,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 728,
                            "end": 734
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 736,
                        "end": 745,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 737,
                          "end": 745,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 739,
                            "end": 745
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 747,
                      "end": 756,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 750,
                        "end": 756
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 759,
      "end": 794,
      "expression": {
        "type": "AssignmentExpression",
        "start": 759,
        "end": 794,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 759,
          "end": 761,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 764,
          "end": 794,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 765,
              "end": 768,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 770,
              "end": 773,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 778,
            "end": 794,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 780,
                "end": 792,
                "argument": {
                  "type": "Literal",
                  "start": 787,
                  "end": 791,
                  "value": true,
                  "raw": "true"
                }
              }
            ]
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
