__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 448,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
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
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "5",
            "value": 5,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 23,
            "raw": "/yo/",
            "regex": {
              "flags": "",
              "pattern": "yo"
            },
            "value": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 34,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 25,
        "end": 33,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 45,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 36,
          "end": 43,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 43,
            "decorators": [],
            "name": "toBAZ",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 70,
            "end": 71,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 86,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 86,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 89,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 156,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 187,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 187,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 187,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 190,
            "end": 192,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 208,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 208,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 211,
            "end": 234,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 226,
              "end": 234,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 234,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 212,
                "end": 221,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 213,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 250,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 250,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 250,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 250,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 253,
            "end": 257,
            "raw": "/./g",
            "regex": {
              "flags": "g",
              "pattern": "."
            },
            "value": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 273,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 273,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 273,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 276,
            "end": 278,
            "raw": "34",
            "value": 34,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 293,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 293,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 296,
            "end": 300,
            "raw": "\"yo\"",
            "value": "yo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 316,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 316,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 316,
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 319,
            "end": 323,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 335,
            "end": 342,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 335,
              "end": 336,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 340,
              "end": 342,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 383,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 383,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 380,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 368,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 368,
              "end": 380,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 377,
                "end": 380,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 370,
                "end": 376,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 372,
                  "end": 376
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 355,
        "decorators": [],
        "name": "baz",
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
      "start": 384,
      "end": 442,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 406,
        "end": 442,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 439,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 418,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 439,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 439,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 422,
                    "end": 438,
                    "argument": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 438,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 390,
        "end": 393,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 402,
        "end": 405,
        "decorators": [],
        "name": "baz",
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
