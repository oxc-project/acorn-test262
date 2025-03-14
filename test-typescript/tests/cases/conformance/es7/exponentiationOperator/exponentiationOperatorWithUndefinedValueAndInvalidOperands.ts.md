exponentiationOperatorWithUndefinedValueAndInvalidOperands.ts
```json
{
  "type": "Program",
  "start": 114,
  "end": 512,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 128,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 128,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 121,
                "end": 128
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 158,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 158,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 158,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 184,
            "decorators": [],
            "name": "r1a1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 187,
            "end": 201,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 196,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "decorators": [],
            "name": "r1a2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 214,
            "end": 228,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 214,
              "end": 223,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "decorators": [],
            "name": "r1a3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 241,
            "end": 255,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 241,
              "end": 250,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 266,
            "decorators": [],
            "name": "r1b1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 283,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 274,
              "end": 283,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 293,
            "decorators": [],
            "name": "r1b2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 296,
            "end": 310,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 301,
              "end": 310,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 320,
            "decorators": [],
            "name": "r1b3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 323,
            "end": 337,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 328,
              "end": 337,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 368,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "decorators": [],
            "name": "r1c1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 351,
            "end": 368,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 351,
              "end": 360,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 364,
              "end": 368,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 396,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 378,
            "decorators": [],
            "name": "r1c2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 381,
            "end": 396,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 381,
              "end": 390,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 394,
              "end": 396,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 398,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 406,
            "decorators": [],
            "name": "r1c3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 409,
            "end": 424,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 409,
              "end": 418,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "ObjectExpression",
              "start": 422,
              "end": 424,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 435,
            "decorators": [],
            "name": "r1d1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 438,
            "end": 455,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "raw": "true",
              "value": true
            },
            "right": {
              "type": "Identifier",
              "start": 446,
              "end": 455,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 465,
            "decorators": [],
            "name": "r1d2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 468,
            "end": 483,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 468,
              "end": 470,
              "raw": "''",
              "value": ""
            },
            "right": {
              "type": "Identifier",
              "start": 474,
              "end": 483,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 511,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 493,
            "decorators": [],
            "name": "r1d3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 496,
            "end": 511,
            "operator": "**",
            "left": {
              "type": "ObjectExpression",
              "start": 496,
              "end": 498,
              "properties": []
            },
            "right": {
              "type": "Identifier",
              "start": 502,
              "end": 511,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
