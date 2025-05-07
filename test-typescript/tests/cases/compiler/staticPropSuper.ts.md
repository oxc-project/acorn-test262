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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 65,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": {
              "type": "Literal",
              "start": 63,
              "end": 64,
              "raw": "9",
              "value": 9,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 148,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 103,
                          "end": 104,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 142,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 134,
                      "end": 141,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 134,
                        "end": 139
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 262,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 198,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 195,
              "end": 197,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 204,
            "end": 260,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 215,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 260,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 236,
                          "end": 237,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 264,
      "end": 375,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 375,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 311,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 308,
              "end": 310,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 373,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 373,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 349,
                          "end": 350,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 280,
        "end": 281,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 377,
      "end": 480,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 480,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 416,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 415,
              "raw": "12",
              "value": 12,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 422,
            "end": 478,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 433,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 478,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 451,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 454,
                          "end": 455,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
