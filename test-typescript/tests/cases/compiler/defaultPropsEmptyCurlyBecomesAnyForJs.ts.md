__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 101,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 33,
          "end": 101,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 48,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 47,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 62,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "name": "state",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 67,
              "end": 99,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 78,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 78,
                "end": 99,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 79,
                    "end": 87,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 86,
                        "end": 87,
                        "typeName": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 89,
                    "end": 97,
                    "name": "state",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 97,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "name": "U",
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
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 16,
          "end": 32,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 17,
              "end": 23,
              "name": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 23,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 31,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 29,
                "end": 31,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 252,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "MyFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "MyFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 35,
        "value": "./component",
        "raw": "\"./component\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 252,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 44,
        "end": 252,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 58,
          "name": "TypedFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 67,
          "end": 72,
          "name": "MyFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 73,
          "end": 252,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 79,
              "end": 250,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 90,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 90,
                "end": 250,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 93,
                  "end": 250,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 103,
                      "end": 153,
                      "expression": {
                        "type": "CallExpression",
                        "start": 103,
                        "end": 152,
                        "callee": {
                          "type": "Super",
                          "start": 103,
                          "end": 108
                        },
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 109,
                            "end": 129,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 110,
                                "end": 121,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 111,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 113,
                                  "end": 121,
                                  "value": "string",
                                  "raw": "\"string\""
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 123,
                                "end": 128,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 124,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 126,
                                  "end": 128,
                                  "value": 42,
                                  "raw": "42"
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 131,
                            "end": 151,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 133,
                                "end": 149,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 138,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 149,
                                  "name": "undefined",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                      "type": "ExpressionStatement",
                      "start": 162,
                      "end": 175,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 174,
                        "object": {
                          "type": "MemberExpression",
                          "start": 162,
                          "end": 172,
                          "object": {
                            "type": "ThisExpression",
                            "start": 162,
                            "end": 166
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 172,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 197,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 184,
                        "end": 196,
                        "object": {
                          "type": "MemberExpression",
                          "start": 184,
                          "end": 194,
                          "object": {
                            "type": "ThisExpression",
                            "start": 184,
                            "end": 188
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 194,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 206,
                      "end": 223,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 206,
                        "end": 222,
                        "object": {
                          "type": "MemberExpression",
                          "start": 206,
                          "end": 216,
                          "object": {
                            "type": "ThisExpression",
                            "start": 206,
                            "end": 210
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 216,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 222,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 232,
                      "end": 244,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 243,
                        "object": {
                          "type": "ThisExpression",
                          "start": 232,
                          "end": 236
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 243,
                          "name": "member",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
