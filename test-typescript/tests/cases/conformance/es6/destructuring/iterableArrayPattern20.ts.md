__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 317,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 225,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 225,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 169,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 77,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 90,
                    "end": 163,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 97,
                      "end": 162,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 111,
                          "end": 127,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 116,
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
                            "type": "ArrayExpression",
                            "start": 118,
                            "end": 127,
                            "elements": [
                              {
                                "type": "NewExpression",
                                "start": 119,
                                "end": 126,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 126,
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 141,
                          "end": 152,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 145,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 147,
                            "end": 152,
                            "raw": "false",
                            "value": false,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
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
            "type": "MethodDefinition",
            "start": 175,
            "end": 223,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 176,
              "end": 191,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 176,
                "end": 182,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 191,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 223,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 205,
                    "end": 217,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 212,
                      "end": 216
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 66,
        "decorators": [],
        "name": "FooArrayIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 287,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 287,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 239,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 240,
          "end": 282,
          "argument": {
            "type": "ArrayPattern",
            "start": 243,
            "end": 273,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 244,
                "end": 257,
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 245,
                    "end": 256,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "NewExpression",
                      "start": 249,
                      "end": 256,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 256,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 259,
                "end": 272,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "start": 263,
                  "end": 272,
                  "elements": [
                    {
                      "type": "NewExpression",
                      "start": 264,
                      "end": 271,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 271,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 282,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 275,
              "end": 282,
              "elementType": {
                "type": "TSArrayType",
                "start": 275,
                "end": 280,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 278,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 317,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 288,
        "end": 316,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 292,
            "end": 315,
            "argument": {
              "type": "NewExpression",
              "start": 295,
              "end": 315,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 299,
                "end": 315,
                "decorators": [],
                "name": "FooArrayIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 288,
          "end": 291,
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
