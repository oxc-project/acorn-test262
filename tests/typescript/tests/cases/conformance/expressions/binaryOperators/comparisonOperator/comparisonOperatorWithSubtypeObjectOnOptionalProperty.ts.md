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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
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
      "start": 48,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
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
      "start": 90,
      "end": 99,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "J",
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
      "start": 115,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 125,
            "end": 130,
            "left": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 148,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 142,
            "end": 147,
            "left": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 171,
            "decorators": [],
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 174,
            "end": 179,
            "left": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 197,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 191,
            "end": 196,
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 231,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 221,
            "decorators": [],
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 224,
            "end": 230,
            "left": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 239,
            "decorators": [],
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 242,
            "end": 248,
            "left": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 283,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 273,
            "decorators": [],
            "name": "rd1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 276,
            "end": 282,
            "left": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 291,
            "decorators": [],
            "name": "rd2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 294,
            "end": 300,
            "left": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 325,
            "decorators": [],
            "name": "re1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 328,
            "end": 334,
            "left": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 353,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 343,
            "decorators": [],
            "name": "re2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 346,
            "end": 352,
            "left": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 387,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 377,
            "decorators": [],
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 380,
            "end": 386,
            "left": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 405,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 395,
            "decorators": [],
            "name": "rf2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 398,
            "end": 404,
            "left": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 441,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 430,
            "decorators": [],
            "name": "rg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 433,
            "end": 440,
            "left": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 449,
            "decorators": [],
            "name": "rg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 452,
            "end": 459,
            "left": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 485,
            "decorators": [],
            "name": "rh1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 488,
            "end": 495,
            "left": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 515,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 504,
            "decorators": [],
            "name": "rh2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 507,
            "end": 514,
            "left": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
