__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 735,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 66,
        "decorators": [],
        "name": "Identical",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 96,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 89,
                "end": 95
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 116,
        "decorators": [],
        "name": "Mutable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 128,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 163,
        "decorators": [],
        "name": "DifferentType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 195,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 193,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 184,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 196,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 219,
        "decorators": [],
        "name": "DifferentName",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 226,
            "end": 249,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 240,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 267,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 266,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 268,
      "end": 283,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 268,
          "end": 278,
          "object": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 278,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 281,
          "end": 283,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 359,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 358,
            "decorators": [],
            "name": "identical",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 358,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 342,
                "end": 358,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 342,
                    "end": 346,
                    "typeName": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 346,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 349,
                    "end": 358,
                    "typeName": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 358,
                      "decorators": [],
                      "name": "Identical",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 360,
      "end": 381,
      "expression": {
        "type": "AssignmentExpression",
        "start": 360,
        "end": 380,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 360,
          "end": 375,
          "object": {
            "type": "Identifier",
            "start": 360,
            "end": 369,
            "decorators": [],
            "name": "identical",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 370,
            "end": 375,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 378,
          "end": 380,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 453,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 452,
            "decorators": [],
            "name": "mutable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 452,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 438,
                "end": 452,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 438,
                    "end": 442,
                    "typeName": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 442,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 445,
                    "end": 452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 452,
                      "decorators": [],
                      "name": "Mutable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 454,
      "end": 473,
      "expression": {
        "type": "AssignmentExpression",
        "start": 454,
        "end": 472,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 454,
          "end": 467,
          "object": {
            "type": "Identifier",
            "start": 454,
            "end": 461,
            "decorators": [],
            "name": "mutable",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 462,
            "end": 467,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 470,
          "end": 472,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 557,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 521,
            "end": 556,
            "decorators": [],
            "name": "differentType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 556,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 536,
                "end": 556,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 536,
                    "end": 540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 540,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 543,
                    "end": 556,
                    "typeName": {
                      "type": "Identifier",
                      "start": 543,
                      "end": 556,
                      "decorators": [],
                      "name": "DifferentType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 558,
      "end": 583,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 582,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 558,
          "end": 577,
          "object": {
            "type": "Identifier",
            "start": 558,
            "end": 571,
            "decorators": [],
            "name": "differentType",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 572,
            "end": 577,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 580,
          "end": 582,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 667,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 666,
            "decorators": [],
            "name": "differentName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 644,
              "end": 666,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 646,
                "end": 666,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 646,
                    "end": 650,
                    "typeName": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 650,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 653,
                    "end": 666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 666,
                      "decorators": [],
                      "name": "DifferentName",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 668,
      "end": 693,
      "expression": {
        "type": "AssignmentExpression",
        "start": 668,
        "end": 692,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 668,
          "end": 687,
          "object": {
            "type": "Identifier",
            "start": 668,
            "end": 681,
            "decorators": [],
            "name": "differentName",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 682,
            "end": 687,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 690,
          "end": 692,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
