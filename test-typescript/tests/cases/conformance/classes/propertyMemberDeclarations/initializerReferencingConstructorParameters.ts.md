initializerReferencingConstructorParameters.ts
```json
{
  "type": "Program",
  "start": 201,
  "end": 554,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 281,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 281,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 221,
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 247,
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
              "optional": false
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
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 279,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 272,
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
              "start": 272,
              "end": 279,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 279,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false
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
        "start": 207,
        "end": 208,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 283,
      "end": 370,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 291,
        "end": 370,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 303,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 329,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 320,
                "end": 328,
                "exprName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 368,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 354,
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
              "start": 354,
              "end": 368,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 368,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 355,
                  "end": 363,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
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
        "start": 289,
        "end": 290,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 372,
      "end": 463,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 380,
        "end": 463,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 386,
            "end": 397,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 390,
              "end": 396,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 390,
                "end": 394
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 425,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 411,
                "end": 424,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 418,
                  "end": 424,
                  "left": {
                    "type": "ThisExpression",
                    "start": 418,
                    "end": 422
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 436,
            "end": 461,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 447,
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
              "start": 447,
              "end": 461,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 458,
                "end": 461,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 448,
                  "end": 456,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
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
        "start": 378,
        "end": 379,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 465,
      "end": 554,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 476,
        "end": 554,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 482,
            "end": 493,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 486,
              "end": 492,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 486,
                "end": 490
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 504,
            "end": 510,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
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
              "start": 508,
              "end": 509,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 552,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
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
              "start": 535,
              "end": 552,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 549,
                "end": 552,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 536,
                  "end": 547,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 547,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 547,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 546,
                        "end": 547,
                        "typeName": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 547,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "start": 471,
        "end": 472,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 472,
        "end": 475,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 473,
            "end": 474,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
