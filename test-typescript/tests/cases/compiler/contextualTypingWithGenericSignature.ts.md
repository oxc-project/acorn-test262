__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 402,
  "end": 469,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 439,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 439,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 410,
                "end": 439,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 416,
                    "end": 437,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 416,
                      "end": 422,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 417,
                          "end": 418,
                          "name": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 418,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 420,
                          "end": 421,
                          "name": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 421,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 423,
                        "end": 427,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 424,
                          "end": 427,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 426,
                            "end": 427,
                            "typeName": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 427,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 429,
                        "end": 433,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 433,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 432,
                            "end": 433,
                            "typeName": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 433,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 436,
                        "end": 437,
                        "typeName": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 437,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 469,
      "expression": {
        "type": "AssignmentExpression",
        "start": 442,
        "end": 469,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 442,
          "end": 444,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 447,
          "end": 469,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 451,
              "end": 452,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 457,
            "end": 469,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 459,
                "end": 467,
                "argument": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 467,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
