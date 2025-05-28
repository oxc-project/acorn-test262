__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 579,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "i1P1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 50,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "i1P2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 75,
          "end": 77,
          "expression": {
            "type": "Identifier",
            "start": 75,
            "end": 77,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 78,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "i2P1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
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
      "start": 101,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 114,
        "end": 178,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 133,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "i2P1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
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
      "start": 180,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 192,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 193,
        "end": 210,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 208,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 201,
                "end": 207
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
      "start": 212,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 224,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 225,
        "end": 242,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 240,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
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
      "type": "ClassDeclaration",
      "start": 244,
      "end": 358,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 252,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 264,
          "end": 266,
          "expression": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 358,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 336,
            "end": 356,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 347,
              "decorators": [],
              "name": "i2P1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 355,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 349,
                "end": 355
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 371,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 370,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 370,
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 370,
                  "decorators": [],
                  "name": "I2",
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
      "type": "VariableDeclaration",
      "start": 372,
      "end": 383,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 382,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 382,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 380,
                "end": 382,
                "typeName": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 382,
                  "decorators": [],
                  "name": "I1",
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
      "type": "VariableDeclaration",
      "start": 384,
      "end": 395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 394,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 394,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 394,
                  "decorators": [],
                  "name": "I3",
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
      "start": 396,
      "end": 404,
      "expression": {
        "type": "AssignmentExpression",
        "start": 396,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 398,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 401,
          "end": 403,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 413,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 412,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 407,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 410,
          "end": 412,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 490,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 489,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 489,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 487,
                "end": 489,
                "typeName": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 489,
                  "decorators": [],
                  "name": "C1",
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
      "type": "VariableDeclaration",
      "start": 492,
      "end": 503,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 502,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "decorators": [],
                  "name": "I4",
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
      "type": "VariableDeclaration",
      "start": 504,
      "end": 515,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 514,
            "decorators": [],
            "name": "i5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 510,
              "end": 514,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 512,
                "end": 514,
                "typeName": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 514,
                  "decorators": [],
                  "name": "I5",
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
      "start": 517,
      "end": 525,
      "expression": {
        "type": "AssignmentExpression",
        "start": 517,
        "end": 524,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 517,
          "end": 519,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 522,
          "end": 524,
          "decorators": [],
          "name": "i5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 556,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 555,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 550,
          "decorators": [],
          "name": "i5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 553,
          "end": 555,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
