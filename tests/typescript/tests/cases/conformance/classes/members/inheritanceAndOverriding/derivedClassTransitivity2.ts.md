__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 391,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 147,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 145,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 218,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 191,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 186,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 180,
                      "end": 186
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 191,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 220,
      "end": 309,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 274,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 274,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 257,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 251,
                      "end": 257
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 269,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 261,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 274,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 320,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 319,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "C",
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
      "start": 321,
      "end": 330,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 329,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "D",
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
      "start": 331,
      "end": 340,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 339,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 339,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 338,
                "end": 339,
                "typeName": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 339,
                  "decorators": [],
                  "name": "E",
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
      "start": 341,
      "end": 347,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 346,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 341,
          "end": 342,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 367,
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 361,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 361,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 365,
                "end": 366,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 390,
            "callee": {
              "type": "MemberExpression",
              "start": 378,
              "end": 383,
              "object": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 380,
                "end": 383,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 384,
                "end": 385,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 387,
                "end": 389,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
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
