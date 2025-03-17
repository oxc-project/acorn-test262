__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 364,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 63,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 54,
              "end": 63,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 67,
        "end": 125,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 72,
          "end": 86,
          "name": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 77,
            "end": 86,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 81,
                "end": 86,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 86,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 89,
          "end": 123,
          "checkType": {
            "type": "TSTypeReference",
            "start": 89,
            "end": 90,
            "typeName": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 99,
            "end": 104,
            "literal": {
              "type": "Literal",
              "start": 99,
              "end": 104,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 107,
            "end": 111,
            "literal": {
              "type": "Literal",
              "start": 107,
              "end": 111,
              "value": true,
              "raw": "true"
            }
          },
          "falseType": {
            "type": "TSFunctionType",
            "start": 114,
            "end": 123,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 123,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 120,
                "end": 123
              }
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 77,
          "end": 86,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 81,
              "end": 86,
              "literal": {
                "type": "Literal",
                "start": 81,
                "end": 86,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 140,
        "name": "test",
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
          "start": 166,
          "end": 172,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "T",
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
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 191,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 189,
            "argument": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "name": "arg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
                "name": "Test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 155,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 156,
                    "end": 163,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 163,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "name": "res1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 206,
            "end": 242,
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 211,
                "end": 241,
                "properties": [
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 224,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 220,
                      "end": 224,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 239,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 231,
                      "end": 239,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 234,
                        "end": 239,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "name": "res2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 258,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 263,
                "end": 304,
                "properties": [
                  {
                    "type": "Property",
                    "start": 267,
                    "end": 276,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 276,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 280,
                    "end": 302,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 285,
                      "end": 302,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 297,
                        "end": 302,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 318,
            "name": "res3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 362,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 325,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 326,
                "end": 361,
                "properties": [
                  {
                    "type": "Property",
                    "start": 330,
                    "end": 339,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 333,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 343,
                    "end": 359,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 348,
                      "end": 359,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 354,
                        "end": 359,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
