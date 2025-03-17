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
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "name": "y",
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
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 145,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 149,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 191,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 186,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 180,
                      "end": 186
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 191,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 220,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 274,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 274,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 257,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 251,
                      "end": 257
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 269,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 261,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 274,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 311,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "name": "c",
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
                  "name": "C",
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
      "start": 321,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 329,
            "name": "d",
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
                  "name": "D",
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
      "start": 331,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 339,
            "name": "e",
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
                  "name": "E",
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
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 361,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
      "start": 369,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 380,
                "end": 383,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
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
