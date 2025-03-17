__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Identical",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Mutable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "DifferentType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "DifferentName",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 266,
            "name": "base",
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
                  "name": "Base",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 278,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 358,
            "name": "identical",
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
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Identical",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
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
            "name": "identical",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 370,
            "end": 375,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 452,
            "name": "mutable",
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
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Mutable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
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
            "name": "mutable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 462,
            "end": 467,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 521,
            "end": 556,
            "name": "differentType",
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
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "DifferentType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
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
            "name": "differentType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 572,
            "end": 577,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 666,
            "name": "differentName",
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
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "DifferentName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
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
            "name": "differentName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 682,
            "end": 687,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
