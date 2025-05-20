__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 201,
  "end": 519,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 356,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 221,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 247,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 238,
                "end": 246,
                "exprName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 261,
            "end": 272,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 265,
              "end": 271,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 265,
                "end": 269
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 286,
            "end": 303,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 289,
                "end": 302,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 296,
                  "end": 302,
                  "left": {
                    "type": "ThisExpression",
                    "start": 296,
                    "end": 300
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 354,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 354,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 354,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 348,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 342,
                      "end": 347,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 346,
                        "end": 347,
                        "raw": "1",
                        "value": 1
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
                  "start": 329,
                  "end": 330,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 358,
      "end": 519,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 519,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 381,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 395,
            "end": 407,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 398,
                "end": 406,
                "exprName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 421,
            "end": 432,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 425,
              "end": 431,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 425,
                "end": 429
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 446,
            "end": 463,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 462,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 449,
                "end": 462,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 456,
                  "end": 462,
                  "left": {
                    "type": "ThisExpression",
                    "start": 456,
                    "end": 460
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 477,
            "end": 517,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 477,
              "end": 488,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 488,
              "end": 517,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 495,
                "end": 517,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 505,
                    "end": 511,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 505,
                      "end": 510,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 509,
                        "end": 510,
                        "raw": "1",
                        "value": 1
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
                  "start": 489,
                  "end": 493,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 490,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 492,
                      "end": 493,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 365,
        "end": 368,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 366,
            "end": 367,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
