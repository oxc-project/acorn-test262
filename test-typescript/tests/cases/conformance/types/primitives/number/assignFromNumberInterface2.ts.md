__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 43,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
      "start": 45,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "name": "NotNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 295,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 104,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 79,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 80,
                "end": 94,
                "name": "radix",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 94,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 109,
            "end": 150,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 116,
              "name": "toFixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 117,
                "end": 140,
                "name": "fractionDigits",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 155,
            "end": 202,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 168,
              "name": "toExponential",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 192,
                "name": "fractionDigits",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 247,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 218,
              "name": "toPrecision",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 237,
                "name": "precision",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 231,
                    "end": 237
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 252,
            "end": 270,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 259,
              "name": "valueOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 275,
            "end": 293,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 282,
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 305,
            "end": 306,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 321,
            "name": "a",
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
                  "name": "Number",
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
      "start": 323,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 339,
            "name": "b",
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
                  "name": "NotNumber",
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 371,
          "end": 372,
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
