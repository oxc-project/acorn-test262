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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
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
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                          "value": "a",
                          "raw": "\"a\""
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 37,
                  "end": 46,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 43,
                    "end": 46,
                    "value": "b",
                    "raw": "\"b\""
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 83,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 81,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 111,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 102,
          "end": 111,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 111,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 111,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 111,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
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
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ObjectExpression",
                "start": 132,
                "end": 139,
                "properties": [
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 138,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 136,
                      "end": 138,
                      "value": "",
                      "raw": "''"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 186,
                        "end": 188,
                        "value": "",
                        "raw": "''"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 218,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 204,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 214,
                      "end": 216,
                      "value": "",
                      "raw": "''"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
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
