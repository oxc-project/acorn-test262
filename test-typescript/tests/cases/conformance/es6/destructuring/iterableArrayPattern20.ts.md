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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "x",
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
            "typeAnnotation": null,
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
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "y",
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
            "typeAnnotation": null,
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
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 66,
        "name": "FooArrayIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 225,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 77,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 116,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 118,
                            "end": 127,
                            "elements": [
                              {
                                "type": "NewExpression",
                                "start": 119,
                                "end": 126,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 126,
                                  "name": "Foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 141,
                          "end": 152,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 145,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 147,
                            "end": 152,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 223,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 176,
              "end": 191,
              "object": {
                "type": "Identifier",
                "start": 176,
                "end": 182,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 191,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 239,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 240,
          "end": 282,
          "argument": {
            "type": "ArrayPattern",
            "start": 243,
            "end": 273,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 244,
                "end": 257,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 245,
                    "end": 256,
                    "left": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "NewExpression",
                      "start": 249,
                      "end": 256,
                      "callee": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 256,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 259,
                "end": 272,
                "left": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 263,
                  "end": 272,
                  "elements": [
                    {
                      "type": "NewExpression",
                      "start": 264,
                      "end": 271,
                      "callee": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 271,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 287,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 317,
      "expression": {
        "type": "CallExpression",
        "start": 288,
        "end": 316,
        "callee": {
          "type": "Identifier",
          "start": 288,
          "end": 291,
          "name": "fun",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 292,
            "end": 315,
            "argument": {
              "type": "NewExpression",
              "start": 295,
              "end": 315,
              "callee": {
                "type": "Identifier",
                "start": 299,
                "end": 315,
                "name": "FooArrayIterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
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
