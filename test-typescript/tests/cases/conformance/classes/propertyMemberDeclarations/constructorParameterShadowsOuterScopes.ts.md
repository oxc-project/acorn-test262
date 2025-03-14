__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 402,
  "end": 729,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 410,
            "end": 411,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 413,
      "end": 575,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 575,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 433,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 502,
            "end": 569,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 513,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 569,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 525,
                "end": 569,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 535,
                    "end": 541,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 535,
                      "end": 540,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 539,
                        "end": 540,
                        "raw": "2",
                        "value": 2
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
                  "start": 514,
                  "end": 523,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 517,
                      "end": 523
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 585,
            "end": 586,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 588,
      "end": 729,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 729,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 602,
            "end": 608,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 677,
            "end": 727,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 677,
              "end": 688,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 688,
              "end": 727,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 700,
                "end": 727,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 710,
                    "end": 721,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 714,
                        "end": 720,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 718,
                          "end": 720,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 689,
                  "end": 698,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 690,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 692,
                      "end": 698
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 595,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
