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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 67,
        "end": 125,
        "constraint": {
          "type": "TSUnionType",
          "start": 77,
          "end": 86,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 81,
              "end": 86,
              "literal": {
                "type": "Literal",
                "start": 81,
                "end": 86,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 89,
          "end": 123,
          "checkType": {
            "type": "TSTypeReference",
            "start": 89,
            "end": 90,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 99,
            "end": 104,
            "literal": {
              "type": "Literal",
              "start": 99,
              "end": 104,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          "falseType": {
            "type": "TSFunctionType",
            "start": 114,
            "end": 123,
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
            },
            "typeParameters": null
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 107,
            "end": 111,
            "literal": {
              "type": "Literal",
              "start": 107,
              "end": 111,
              "raw": "true",
              "value": true
            }
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 191,
      "async": false,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 140,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 164,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 164,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 220,
                      "end": 224,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 239,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 231,
                      "end": 239,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 234,
                        "end": 239,
                        "body": []
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "decorators": [],
              "name": "test",
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
      "type": "VariableDeclaration",
      "start": 245,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 305,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 276,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 280,
                    "end": 302,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 285,
                      "end": 302,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 297,
                        "end": 302,
                        "body": []
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "test",
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
      "type": "VariableDeclaration",
      "start": 308,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 362,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 333,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 343,
                    "end": 359,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 348,
                      "end": 359,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 354,
                        "end": 359,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 325,
              "decorators": [],
              "name": "test",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
