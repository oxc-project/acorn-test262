__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 363,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
        "key": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false,
        "readonly": null
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
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 172,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "decorators": [],
            "name": "res1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 206,
            "end": 242,
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 220,
                      "end": 224,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 239,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 231,
                      "end": 239,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 234,
                        "end": 239,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 306,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 255,
            "decorators": [],
            "name": "res2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 258,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 276,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 280,
                    "end": 302,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 285,
                      "end": 302,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 297,
                        "end": 302,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 363,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 318,
            "decorators": [],
            "name": "res3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 362,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 325,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 333,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 343,
                    "end": 359,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 348,
                      "end": 359,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 354,
                        "end": 359,
                        "body": []
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
