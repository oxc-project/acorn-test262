__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 544,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 48,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 79,
                    "argument": {
                      "type": "Literal",
                      "start": 76,
                      "end": 78,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 119,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 119,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 119,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 108,
                    "end": 117,
                    "argument": {
                      "type": "Literal",
                      "start": 115,
                      "end": 116,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 143,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 184,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 197,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 198,
        "end": 337,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
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
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 275,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 275,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 249,
                "end": 275,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 259,
                    "end": 269,
                    "argument": {
                      "type": "Literal",
                      "start": 266,
                      "end": 268,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 240,
                "end": 248,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 310,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 310,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 308,
                    "argument": {
                      "type": "Literal",
                      "start": 306,
                      "end": 307,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 315,
            "end": 335,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 335,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 335,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 347,
            "end": 353,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 351,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 370,
            "end": 379,
            "object": {
              "type": "Identifier",
              "start": 370,
              "end": 377,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 400,
            "end": 409,
            "callee": {
              "type": "MemberExpression",
              "start": 400,
              "end": 407,
              "object": {
                "type": "Identifier",
                "start": 400,
                "end": 404,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 405,
                "end": 407,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 423,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 426,
            "end": 438,
            "callee": {
              "type": "MemberExpression",
              "start": 426,
              "end": 436,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 433,
                "name": "Derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 434,
                "end": 436,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 459,
            "end": 465,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 463,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 473,
      "end": 484,
      "expression": {
        "type": "AssignmentExpression",
        "start": 473,
        "end": 483,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 473,
          "end": 479,
          "object": {
            "type": "Identifier",
            "start": 473,
            "end": 477,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 482,
          "end": 483,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 498,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 501,
            "end": 510,
            "object": {
              "type": "Identifier",
              "start": 501,
              "end": 508,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 521,
      "end": 535,
      "expression": {
        "type": "AssignmentExpression",
        "start": 521,
        "end": 534,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 521,
          "end": 530,
          "object": {
            "type": "Identifier",
            "start": 521,
            "end": 528,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 533,
          "end": 534,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
