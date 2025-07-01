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
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 674,
                        "end": 680
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 671,
                    "end": 680
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    },
                    "start": 682,
                    "end": 691
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 696,
                    "end": 702
                  },
                  "start": 693,
                  "end": 702
                },
                "start": 670,
                "end": 702
              },
              "start": 668,
              "end": 702
            },
            "start": 666,
            "end": 702
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 702
        }
      ],
      "declare": false,
      "start": 662,
      "end": 702
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 720
                    },
                    "typeArguments": null,
                    "start": 711,
                    "end": 720
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 728,
                            "end": 734
                          },
                          "start": 726,
                          "end": 734
                        },
                        "start": 725,
                        "end": 734
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 739,
                            "end": 745
                          },
                          "start": 737,
                          "end": 745
                        },
                        "start": 736,
                        "end": 745
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 750,
                        "end": 756
                      },
                      "start": 747,
                      "end": 756
                    },
                    "start": 724,
                    "end": 756
                  }
                ],
                "start": 711,
                "end": 757
              },
              "start": 709,
              "end": 757
            },
            "start": 707,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 707,
          "end": 757
        }
      ],
      "declare": false,
      "start": 703,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 761
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 768
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 773
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
                  "value": true,
                  "raw": "true",
                  "start": 787,
                  "end": 791
                },
                "start": 780,
                "end": 792
              }
            ],
            "start": 778,
            "end": 794
          },
          "id": null,
          "generator": false,
          "start": 764,
          "end": 794
        },
        "start": 759,
        "end": 794
      },
      "directive": null,
      "start": 759,
      "end": 794
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 662,
  "end": 804
}
```
