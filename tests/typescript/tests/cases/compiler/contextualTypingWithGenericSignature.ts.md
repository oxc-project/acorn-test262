__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 401,
  "end": 468,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 439,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 438,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 409,
                "end": 438,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 415,
                    "end": 436,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 415,
                      "end": 421,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 416,
                          "end": 417,
                          "name": {
                            "type": "Identifier",
                            "start": 416,
                            "end": 417,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 419,
                          "end": 420,
                          "name": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 422,
                        "end": 426,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 423,
                          "end": 426,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 425,
                            "end": 426,
                            "typeName": {
                              "type": "Identifier",
                              "start": 425,
                              "end": 426,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 428,
                        "end": 432,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 429,
                          "end": 432,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 431,
                            "end": 432,
                            "typeName": {
                              "type": "Identifier",
                              "start": 431,
                              "end": 432,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 433,
                      "end": 436,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 435,
                        "end": 436,
                        "typeName": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
      "start": 441,
      "end": 468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 441,
        "end": 468,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 441,
          "end": 443,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 446,
          "end": 468,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 456,
            "end": 468,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 458,
                "end": 466,
                "argument": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
