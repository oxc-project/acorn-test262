__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 10,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 20,
            "end": 32,
            "properties": [
              {
                "type": "Property",
                "start": 21,
                "end": 31,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 31,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 48,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 55,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 106,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 102,
            "end": 105,
            "value": 123,
            "raw": "123"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 115,
            "end": 119,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 129,
            "end": 135,
            "value": "fooo",
            "raw": "\"fooo\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 144,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 143,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 190,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 214,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 213,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 231,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 258,
          "end": 259,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 296,
            "decorators": [],
            "name": "numObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 296,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 299,
            "end": 302,
            "value": 123,
            "raw": "123"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 324,
            "decorators": [],
            "name": "boolObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 317,
                "end": 324,
                "typeName": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 324,
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 327,
            "end": 331,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 363,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 351,
            "decorators": [],
            "name": "strObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 351,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 351,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 354,
            "end": 362,
            "value": "string",
            "raw": "\"string\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 365,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 365,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 365,
          "end": 366,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 369,
          "end": 375,
          "decorators": [],
          "name": "numObj",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 383,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 383,
          "end": 384,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 387,
          "end": 394,
          "decorators": [],
          "name": "boolObj",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 413,
      "expression": {
        "type": "AssignmentExpression",
        "start": 402,
        "end": 412,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 403,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 406,
          "end": 412,
          "decorators": [],
          "name": "strObj",
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
