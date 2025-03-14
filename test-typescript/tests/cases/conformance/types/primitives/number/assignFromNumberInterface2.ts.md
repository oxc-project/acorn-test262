assignFromNumberInterface2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 427,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 43,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 295,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 295,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 79,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 80,
                "end": 94,
                "decorators": [],
                "name": "radix",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 94,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 109,
            "end": 150,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 116,
              "decorators": [],
              "name": "toFixed",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 117,
                "end": 140,
                "decorators": [],
                "name": "fractionDigits",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 155,
            "end": 202,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 168,
              "decorators": [],
              "name": "toExponential",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 192,
                "decorators": [],
                "name": "fractionDigits",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 247,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 218,
              "decorators": [],
              "name": "toPrecision",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 237,
                "decorators": [],
                "name": "precision",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 231,
                    "end": 237
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 252,
            "end": 270,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 259,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 269,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 263,
                "end": 269
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 275,
            "end": 293,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 282,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 292,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 286,
                "end": 292
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "decorators": [],
        "name": "NotNumber",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 305,
            "end": 306,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 321,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 321,
                  "decorators": [],
                  "name": "Number",
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
      "start": 323,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 339,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 330,
                "end": 339,
                "typeName": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 339,
                  "decorators": [],
                  "name": "NotNumber",
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 350,
      "end": 356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 350,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 365,
      "expression": {
        "type": "AssignmentExpression",
        "start": 359,
        "end": 364,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 373,
      "expression": {
        "type": "AssignmentExpression",
        "start": 367,
        "end": 372,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 371,
          "end": 372,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 382,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 381,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 401,
        "end": 406,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 401,
          "end": 402,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
