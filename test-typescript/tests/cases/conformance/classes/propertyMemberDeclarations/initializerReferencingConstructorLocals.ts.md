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
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 221,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "z",
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
            "type": "PropertyDefinition",
            "start": 235,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 261,
            "end": 272,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 265,
              "end": 271,
              "object": {
                "type": "ThisExpression",
                "start": 265,
                "end": 269
              },
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
            "type": "PropertyDefinition",
            "start": 286,
            "end": 303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 354,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 354,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 354,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 348,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 342,
                      "end": 347,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 346,
                        "end": 347,
                        "value": 1,
                        "raw": "1"
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
      "type": "ClassDeclaration",
      "start": 358,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 519,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 381,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "z",
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
            "type": "PropertyDefinition",
            "start": 395,
            "end": 407,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 421,
            "end": 432,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 425,
              "end": 431,
              "object": {
                "type": "ThisExpression",
                "start": 425,
                "end": 429
              },
              "property": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
            "type": "PropertyDefinition",
            "start": 446,
            "end": 463,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 477,
            "end": 517,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 477,
              "end": 488,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 488,
              "end": 517,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 489,
                  "end": 493,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 490,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 492,
                      "end": 493,
                      "typeName": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 495,
                "end": 517,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 505,
                    "end": 511,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 505,
                      "end": 510,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 509,
                        "end": 510,
                        "value": 1,
                        "raw": "1"
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 365,
        "end": 368,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 366,
            "end": 367,
            "name": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
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
          }
        ]
      },
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
