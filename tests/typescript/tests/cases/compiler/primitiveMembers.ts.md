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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 24,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 23,
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
            "value": null,
            "raw": "/yo/",
            "regex": {
              "pattern": "yo",
              "flags": ""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 34,
      "expression": {
        "type": "MemberExpression",
        "start": 25,
        "end": 33,
        "object": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 45,
        "callee": {
          "type": "MemberExpression",
          "start": 36,
          "end": 43,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 43,
            "decorators": [],
            "name": "toBAZ",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 59,
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 57,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "toString",
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
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 72,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 71,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 87,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 86,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 86,
                  "decorators": [],
                  "name": "Number",
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
      "start": 89,
      "end": 95,
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 157,
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
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 192,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 192,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 187,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 190,
            "end": 192,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 234,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 208,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 211,
            "end": 234,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "MemberExpression",
              "start": 226,
              "end": 234,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 234,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 257,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 250,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 253,
            "end": 257,
            "value": null,
            "raw": "/./g",
            "regex": {
              "pattern": ".",
              "flags": "g"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 279,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 278,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 273,
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
            "start": 276,
            "end": 278,
            "value": 34,
            "raw": "34"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 300,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
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
            "start": 296,
            "end": 300,
            "value": "yo",
            "raw": "\"yo\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 324,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 323,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 316,
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
            "start": 319,
            "end": 323,
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
      "start": 326,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 342,
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
            "left": {
              "type": "Literal",
              "start": 335,
              "end": 336,
              "value": 5,
              "raw": "5"
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 340,
              "end": 342,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 383,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 383,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 380,
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
            "value": {
              "type": "FunctionExpression",
              "start": 368,
              "end": 380,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 377,
                "end": 380,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
      "start": 384,
      "end": 442,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 406,
        "end": 442,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 439,
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
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 439,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
