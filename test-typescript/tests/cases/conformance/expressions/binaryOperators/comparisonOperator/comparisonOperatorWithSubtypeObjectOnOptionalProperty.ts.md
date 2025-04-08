__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 44,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
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
      "start": 48,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "name": "J",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 78,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
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
      "start": 80,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "I",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 98,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "J",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "name": "ra1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 125,
            "end": 130,
            "left": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "name": "ra2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 142,
            "end": 147,
            "left": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 171,
            "name": "rb1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 174,
            "end": 179,
            "left": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "name": "rb2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 191,
            "end": 196,
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 221,
            "name": "rc1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 224,
            "end": 230,
            "left": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 239,
            "name": "rc2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 242,
            "end": 248,
            "left": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 273,
            "name": "rd1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 276,
            "end": 282,
            "left": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 291,
            "name": "rd2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 294,
            "end": 300,
            "left": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 325,
            "name": "re1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 328,
            "end": 334,
            "left": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 343,
            "name": "re2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 346,
            "end": 352,
            "left": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 377,
            "name": "rf1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 380,
            "end": 386,
            "left": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 395,
            "name": "rf2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 398,
            "end": 404,
            "left": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 430,
            "name": "rg1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 433,
            "end": 440,
            "left": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 449,
            "name": "rg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 452,
            "end": 459,
            "left": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 485,
            "name": "rh1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 488,
            "end": 495,
            "left": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 504,
            "name": "rh2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 507,
            "end": 514,
            "left": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
