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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 439,
            "decorators": [],
            "name": "f2",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 423,
                        "end": 427,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 424,
                          "end": 427,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 426,
                            "end": 427,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 427,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 429,
                        "end": 433,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 433,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 432,
                            "end": 433,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 433,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 437,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 416,
                      "end": 422,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 417,
                          "end": 418,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 418,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 420,
                          "end": 421,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 421,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
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
      "start": 442,
      "end": 469,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 442,
        "end": 469,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 442,
          "end": 444,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 447,
          "end": 469,
          "async": false,
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
                  "decorators": [],
                  "name": "x",
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
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 451,
              "end": 452,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
