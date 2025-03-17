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
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 413,
      "end": 575,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 575,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 433,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 502,
            "end": 569,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 513,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 569,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 514,
                  "end": 523,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 517,
                      "end": 523
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "type": "VariableDeclaration",
      "start": 577,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 588,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 595,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 729,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 602,
            "end": 608,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 677,
            "end": 727,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 677,
              "end": 688,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 688,
              "end": 727,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 689,
                  "end": 698,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 690,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 692,
                      "end": 698
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
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
