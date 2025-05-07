__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 101,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 23,
          "end": 100,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 25,
              "end": 53,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 27,
                  "end": 39,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 33,
                      "end": 38,
                      "literal": {
                        "type": "Literal",
                        "start": 33,
                        "end": 38,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 51,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 43,
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 60,
              "end": 100,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 62,
                  "end": 74,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 68,
                      "end": 73,
                      "literal": {
                        "type": "Literal",
                        "start": 68,
                        "end": 73,
                        "raw": "\"bar\"",
                        "value": "bar",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 75,
                  "end": 87,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 88,
                  "end": 98,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 93,
                    "decorators": [],
                    "name": "extra",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 144,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 136,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "decorators": [],
                "name": "Blah",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 143,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 157,
            "end": 162,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 208,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 170,
            "end": 207,
            "properties": [
              {
                "type": "Property",
                "start": 176,
                "end": 186,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 180,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 186,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 205,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 205,
                  "raw": "\"hello!\"",
                  "value": "hello!",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 169,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 219,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 222,
            "end": 227,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 291,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 290,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 235,
            "end": 289,
            "properties": [
              {
                "type": "Property",
                "start": 241,
                "end": 251,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 245,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 257,
                "end": 270,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 262,
                  "end": 270,
                  "raw": "\"hello!\"",
                  "value": "hello!",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 276,
                "end": 286,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 281,
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 283,
                  "end": 286,
                  "raw": "123",
                  "value": 123,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 234,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 303,
            "end": 308,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 366,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 365,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 316,
            "end": 364,
            "properties": [
              {
                "type": "Property",
                "start": 322,
                "end": 331,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 331,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 337,
                "end": 345,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 340,
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 342,
                  "end": 345,
                  "raw": "123",
                  "value": 123,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 351,
                "end": 361,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 356,
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 358,
                  "end": 361,
                  "raw": "123",
                  "value": 123,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 310,
          "end": 315,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
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
