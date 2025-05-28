__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 28,
                "end": 31,
                "literal": {
                  "type": "Literal",
                  "start": 28,
                  "end": 31,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
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
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 86,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 83,
                "end": 86,
                "literal": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
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
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 124,
        "decorators": [],
        "name": "ValidType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 127,
        "end": 140,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 127,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 132,
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 135,
            "end": 140,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 140,
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 160,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 185,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 174,
                "end": 185,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 183,
                    "decorators": [],
                    "name": "ValidType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
      "type": "VariableDeclaration",
      "start": 190,
      "end": 216,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 210,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 210,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 201,
                "end": 210,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 208,
                    "decorators": [],
                    "name": "Wrapper",
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
            "start": 213,
            "end": 215,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 271,
      "expression": {
        "type": "CallExpression",
        "start": 218,
        "end": 270,
        "callee": {
          "type": "MemberExpression",
          "start": 218,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 218,
            "end": 221,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 227,
            "end": 269,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 267,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "types",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 240,
                  "end": 267,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 241,
                      "end": 266,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 251,
                          "end": 260,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 251,
                            "end": 255,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 257,
                            "end": 260,
                            "value": "A",
                            "raw": "\"A\""
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
