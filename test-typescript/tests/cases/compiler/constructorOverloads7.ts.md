__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "x",
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
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 51,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "y",
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
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 67,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 67,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 100,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 111,
                  "name": "dx",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 105,
                      "end": 111
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 123,
                  "name": "dy",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 117,
                      "end": 123
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 131,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 131,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 144,
              "name": "origin",
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
              "start": 144,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 151,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 325,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 329,
          "end": 330,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 332,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 349,
            "expression": {
              "type": "AssignmentExpression",
              "start": 338,
              "end": 348,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 338,
                "end": 344,
                "object": {
                  "type": "ThisExpression",
                  "start": 338,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 354,
            "end": 365,
            "expression": {
              "type": "AssignmentExpression",
              "start": 354,
              "end": 364,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 354,
                "end": 360,
                "object": {
                  "type": "ThisExpression",
                  "start": 354,
                  "end": 358
                },
                "property": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 387,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 407,
        "name": "EF1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 408,
          "end": 416,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 416,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 410,
              "end": 416
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 418,
          "end": 426,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 419,
            "end": 426,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 420,
              "end": 426
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 427,
        "end": 434,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 428,
          "end": 434
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 437,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 449,
        "name": "EF1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 450,
          "end": 451,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
