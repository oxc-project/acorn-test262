__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 470,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 67,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 67,
              "end": 90,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 100,
              "end": 132,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 111,
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 105,
                      "end": 111
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 123,
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 117,
                      "end": 123
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 131,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 131,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 144,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 151,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 151,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 332,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 349,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 338,
              "end": 348,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 338,
                "end": 344,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 338,
                  "end": 342
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 354,
            "end": 365,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 354,
              "end": 364,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 354,
                "end": 360,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 354,
                  "end": 358
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 371,
            "end": 383,
            "argument": {
              "type": "ThisExpression",
              "start": 378,
              "end": 382
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 325,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 329,
          "end": 330,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 387,
      "end": 435,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 407,
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 408,
          "end": 416,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 416,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 410,
              "end": 416
            }
          }
        },
        {
          "type": "Identifier",
          "start": 418,
          "end": 426,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 419,
            "end": 426,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 420,
              "end": 426
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 427,
        "end": 434,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 428,
          "end": 434
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 437,
      "end": 470,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 455,
        "end": 470,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 457,
            "end": 468,
            "argument": {
              "type": "BinaryExpression",
              "start": 464,
              "end": 467,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 449,
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 450,
          "end": 451,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
