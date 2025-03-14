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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 145,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 191,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 191,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 191,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 220,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 274,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 274,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 274,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "D",
        "optional": false
      }
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
          "definite": false,
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
      "start": 321,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 329,
          "definite": false,
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
      "start": 331,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 339,
          "definite": false,
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 367,
            "arguments": [
              {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 365,
                "end": 366,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 361,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 361,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 390,
            "arguments": [
              {
                "type": "Literal",
                "start": 384,
                "end": 385,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 387,
                "end": 389,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 378,
              "end": 383,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 380,
                "end": 383,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
