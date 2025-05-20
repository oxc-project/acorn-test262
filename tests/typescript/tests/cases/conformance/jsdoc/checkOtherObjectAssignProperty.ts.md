__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 509,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 41,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 19,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 21,
                  "end": 23,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 25,
                "end": 39,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 33,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 39,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 87,
        "arguments": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 74,
            "end": 81,
            "raw": "\"thing\"",
            "value": "thing"
          },
          {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 64,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 64,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 116,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 148,
            "end": 155,
            "raw": "\"other\"",
            "value": "other"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 225,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 158,
        "end": 224,
        "arguments": [
          {
            "type": "Identifier",
            "start": 180,
            "end": 187,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 194,
            "end": 223,
            "properties": [
              {
                "type": "Property",
                "start": 196,
                "end": 205,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 201,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 203,
                  "end": 205,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 207,
                "end": 221,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 217,
                  "end": 221,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 158,
          "end": 179,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 158,
            "end": 164,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 179,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 227,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 241,
            "decorators": [],
            "name": "propName",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 244,
            "end": 250,
            "raw": "\"prop\"",
            "value": "prop"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 251,
        "end": 322,
        "arguments": [
          {
            "type": "Identifier",
            "start": 273,
            "end": 280,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 282,
            "end": 290,
            "decorators": [],
            "name": "propName",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 292,
            "end": 321,
            "properties": [
              {
                "type": "Property",
                "start": 294,
                "end": 303,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 299,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 301,
                  "end": 303,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 305,
                "end": 319,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 313,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 315,
                  "end": 319,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 251,
          "end": 272,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 257,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 258,
            "end": 272,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 326,
      "end": 370,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 369,
        "arguments": [
          {
            "type": "Identifier",
            "start": 348,
            "end": 355,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 357,
            "end": 363,
            "raw": "\"bad1\"",
            "value": "bad1"
          },
          {
            "type": "ObjectExpression",
            "start": 365,
            "end": 368,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 326,
          "end": 347,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 326,
            "end": 332,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 333,
            "end": 347,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 371,
      "end": 448,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 371,
        "end": 447,
        "arguments": [
          {
            "type": "Identifier",
            "start": 393,
            "end": 400,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 402,
            "end": 408,
            "raw": "\"bad2\"",
            "value": "bad2"
          },
          {
            "type": "ObjectExpression",
            "start": 410,
            "end": 446,
            "properties": [
              {
                "type": "Property",
                "start": 412,
                "end": 431,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 415,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 415,
                  "end": 431,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 418,
                    "end": 431,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 420,
                        "end": 429,
                        "argument": {
                          "type": "Literal",
                          "start": 427,
                          "end": 429,
                          "raw": "12",
                          "value": 12
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
              },
              {
                "type": "Property",
                "start": 433,
                "end": 444,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 438,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 440,
                  "end": 444,
                  "raw": "\"no\"",
                  "value": "no"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 371,
          "end": 392,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 371,
            "end": 377,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 378,
            "end": 392,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 449,
      "end": 508,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 449,
        "end": 507,
        "arguments": [
          {
            "type": "Identifier",
            "start": 471,
            "end": 478,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 480,
            "end": 486,
            "raw": "\"bad3\"",
            "value": "bad3"
          },
          {
            "type": "ObjectExpression",
            "start": 488,
            "end": 506,
            "properties": [
              {
                "type": "Property",
                "start": 490,
                "end": 504,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 498,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 500,
                  "end": 504,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 449,
          "end": 470,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 449,
            "end": 455,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 456,
            "end": 470,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 29,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 28,
                "raw": "\"./mod1\"",
                "value": "./mod1"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 19,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 41,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 31,
        "end": 40,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 31,
          "end": 34,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 40,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 51,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 62,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 53,
        "end": 61,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 53,
          "end": 56,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 57,
          "end": 61,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 63,
        "end": 71,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "decorators": [],
          "name": "bad1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 81,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "bad2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 83,
        "end": 91,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 83,
          "end": 86,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "decorators": [],
          "name": "bad3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 104,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 104,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 107,
          "end": 108,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 124,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 123,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 110,
          "end": 119,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 113,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 122,
          "end": 123,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 138,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 125,
        "end": 137,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 125,
          "end": 133,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 136,
          "end": 137,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 152,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 147,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "bad1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 150,
          "end": 151,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 153,
          "end": 161,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 156,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "bad2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 164,
          "end": 165,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 167,
          "end": 175,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "decorators": [],
            "name": "bad3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 178,
          "end": 179,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
