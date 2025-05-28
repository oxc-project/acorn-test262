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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 48,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 119,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 119,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 143,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 143,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 143,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 337,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 184,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 197,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 198,
        "end": 337,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 222,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 275,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 275,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 240,
                "end": 248,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 310,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 315,
            "end": 335,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 335,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 335,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 354,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 347,
            "end": 353,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 351,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 380,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 370,
            "end": 379,
            "object": {
              "type": "Identifier",
              "start": 370,
              "end": 377,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 410,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 405,
                "end": 407,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 439,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 423,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 434,
                "end": 436,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 466,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 459,
            "end": 465,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 463,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 498,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 501,
            "end": 510,
            "object": {
              "type": "Identifier",
              "start": 501,
              "end": 508,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
