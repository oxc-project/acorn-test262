__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 480,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
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
      "start": 13,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 65,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 63,
              "end": 64,
              "value": 9,
              "raw": "9"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 148,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 95,
                    "end": 105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 99,
                        "end": 104,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 103,
                          "end": 104,
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
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 142,
                    "expression": {
                      "type": "CallExpression",
                      "start": 134,
                      "end": 141,
                      "callee": {
                        "type": "Super",
                        "start": 134,
                        "end": 139
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 152,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 198,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 195,
              "end": 197,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 204,
            "end": 260,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 215,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 260,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 260,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 238,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 232,
                        "end": 237,
                        "id": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 236,
                          "end": 237,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "start": 264,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 280,
        "end": 281,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 375,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 308,
              "end": 310,
              "value": 11,
              "raw": "11"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 299,
                "end": 305
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 373,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 373,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 341,
                    "end": 351,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 345,
                        "end": 350,
                        "id": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 349,
                          "end": 350,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "start": 377,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 480,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 416,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 415,
              "value": 12,
              "raw": "12"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 404,
                "end": 410
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 422,
            "end": 478,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 433,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 478,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 436,
                "end": 478,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 446,
                    "end": 456,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 450,
                        "end": 455,
                        "id": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 451,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 454,
                          "end": 455,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
