__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 123,
  "end": 402,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 167,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 165,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 165,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 169,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 176,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 212,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 241,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 326,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 275,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 286,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 291,
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
      "type": "VariableDeclaration",
      "start": 328,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 336,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 336,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
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
      "start": 338,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
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
      "start": 348,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 356,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
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
      "start": 358,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 358,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
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
      "start": 365,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 373,
            "end": 381,
            "callee": {
              "type": "MemberExpression",
              "start": 373,
              "end": 378,
              "object": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
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
                "start": 379,
                "end": 380,
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
      "start": 383,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 401,
            "callee": {
              "type": "MemberExpression",
              "start": 392,
              "end": 397,
              "object": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 394,
                "end": 397,
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
                "start": 398,
                "end": 400,
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
