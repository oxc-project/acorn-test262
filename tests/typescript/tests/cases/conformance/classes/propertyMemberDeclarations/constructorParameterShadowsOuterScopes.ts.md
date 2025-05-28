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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 410,
            "end": 411,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 413,
      "end": 575,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
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
        "start": 421,
        "end": 575,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 433,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
            "type": "MethodDefinition",
            "start": 502,
            "end": 569,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 513,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 569,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 539,
                        "end": 540,
                        "value": 2,
                        "raw": "2"
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
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 587,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 585,
            "end": 586,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 588,
      "end": 729,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 595,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 729,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 602,
            "end": 608,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
            "type": "MethodDefinition",
            "start": 677,
            "end": 727,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 677,
              "end": 688,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 688,
              "end": 727,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 700,
                "end": 727,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 710,
                    "end": 721,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 714,
                        "end": 720,
                        "id": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 718,
                          "end": 720,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
