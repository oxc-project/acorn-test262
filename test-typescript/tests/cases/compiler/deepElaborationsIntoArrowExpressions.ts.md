__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 25,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 15,
                    "end": 23,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 20,
                        "end": 23,
                        "literal": {
                          "type": "Literal",
                          "start": 20,
                          "end": 23,
                          "raw": "\"a\"",
                          "value": "a",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 28,
            "end": 48,
            "properties": [
              {
                "type": "Property",
                "start": 34,
                "end": 46,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 37,
                  "end": 46,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 43,
                    "end": 46,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 83,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 83,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 143,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 143,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 118,
            "end": 141,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 125,
              "end": 140,
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "start": 132,
                "end": 139,
                "properties": [
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 138,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 136,
                      "end": 138,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "expression": true,
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 111,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 102,
          "end": 111,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 111,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 111,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 111,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 193,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 193,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 174,
            "end": 191,
            "argument": {
              "type": "ArrayExpression",
              "start": 181,
              "end": 190,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 182,
                  "end": 189,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 183,
                      "end": 188,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 186,
                        "end": 188,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 160,
        "end": 167,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 162,
          "end": 167,
          "elementType": {
            "type": "TSTypeReference",
            "start": 162,
            "end": 165,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 206,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 206,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 201,
                "end": 206,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 204,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 204,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 209,
            "end": 218,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 210,
                "end": 217,
                "properties": [
                  {
                    "type": "Property",
                    "start": 211,
                    "end": 216,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 214,
                      "end": 216,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
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
