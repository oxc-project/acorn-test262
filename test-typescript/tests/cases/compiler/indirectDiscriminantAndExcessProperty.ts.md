__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 101,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "name": "Blah",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 51,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 43,
                    "name": "abc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "accessibility": null,
                  "static": false
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": "bar",
                        "raw": "\"bar\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 75,
                  "end": 87,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "name": "xyz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 88,
                  "end": 98,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 93,
                    "name": "extra",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "name": "thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 136,
          "name": "blah",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "name": "Blah",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 143,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 157,
            "end": 162,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 209,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 208,
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 169,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 180,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 186,
                  "name": "foo1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 205,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 205,
                  "value": "hello!",
                  "raw": "\"hello!\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 219,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 222,
            "end": 227,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 291,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 290,
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 234,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 245,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "name": "foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 257,
                "end": 270,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 262,
                  "end": 270,
                  "value": "hello!",
                  "raw": "\"hello!\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 276,
                "end": 286,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 281,
                  "name": "extra",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 283,
                  "end": 286,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 303,
            "end": 308,
            "value": "bar",
            "raw": "\"bar\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 366,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 365,
        "callee": {
          "type": "Identifier",
          "start": 310,
          "end": 315,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 331,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 337,
                "end": 345,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 340,
                  "name": "xyz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 342,
                  "end": 345,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 351,
                "end": 361,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 356,
                  "name": "extra",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 358,
                  "end": 361,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
