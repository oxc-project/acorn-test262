__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 663,
  "end": 805,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 703,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 703,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 669,
              "end": 703,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 671,
                "end": 703,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 672,
                    "end": 681,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 673,
                      "end": 681,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 675,
                        "end": 681
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 683,
                    "end": 692,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 684,
                      "end": 692,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 686,
                        "end": 692
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 694,
                  "end": 703,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 697,
                    "end": 703
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 704,
      "end": 759,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 758,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 758,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 758,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 712,
                "end": 758,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 712,
                    "end": 721,
                    "exprName": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 721,
                      "decorators": [],
                      "name": "a0",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 725,
                    "end": 757,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 726,
                        "end": 735,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 727,
                          "end": 735,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 729,
                            "end": 735
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 737,
                        "end": 746,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 738,
                          "end": 746,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 740,
                            "end": 746
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 748,
                      "end": 757,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 751,
                        "end": 757
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 795,
      "expression": {
        "type": "AssignmentExpression",
        "start": 760,
        "end": 795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 760,
          "end": 762,
          "decorators": [],
          "name": "a1",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 765,
          "end": 795,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 779,
            "end": 795,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 781,
                "end": 793,
                "argument": {
                  "type": "Literal",
                  "start": 788,
                  "end": 792,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 766,
              "end": 769,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 771,
              "end": 774,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
