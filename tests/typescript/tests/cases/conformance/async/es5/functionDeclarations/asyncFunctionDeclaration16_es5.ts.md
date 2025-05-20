__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 29,
              "end": 38,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 33,
                  "end": 37
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 270,
  "end": 608,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 278,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 281,
            "end": 313,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 294,
              "end": 313,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 300,
                  "end": 311,
                  "argument": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 310,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 287,
                "end": 290,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 344,
            "end": 376,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 357,
              "end": 376,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 363,
                  "end": 374,
                  "argument": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 373,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 350,
                "end": 353,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 447,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 450,
            "end": 482,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 463,
              "end": 482,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 469,
                  "end": 480,
                  "argument": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 479,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 456,
                "end": 459,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 510,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 513,
            "end": 545,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 526,
              "end": 545,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 532,
                  "end": 543,
                  "argument": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 542,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 519,
                "end": 522,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 608,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 573,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 576,
            "end": 608,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 589,
              "end": 608,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 595,
                  "end": 606,
                  "argument": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 605,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 582,
                "end": 585,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
