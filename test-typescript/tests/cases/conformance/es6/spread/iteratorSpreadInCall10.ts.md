__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 26,
            "end": 37,
            "argument": {
              "type": "MemberExpression",
              "start": 33,
              "end": 37,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 22,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 22,
              "elementType": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 20,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "type": "ClassDeclaration",
      "start": 40,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 162,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
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
              "start": 71,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 84,
                    "end": 156,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 91,
                      "end": 155,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 105,
                          "end": 120,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 110,
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
                            "type": "CallExpression",
                            "start": 112,
                            "end": 120,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 118,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 134,
                          "end": 145,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
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
                            "start": 140,
                            "end": 145,
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
            "start": 168,
            "end": 216,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 169,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 175,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 184,
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
              "start": 185,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 216,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 198,
                    "end": 210,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 205,
                      "end": 209
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
        "start": 46,
        "end": 60,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 220,
        "end": 246,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 224,
            "end": 245,
            "argument": {
              "type": "NewExpression",
              "start": 227,
              "end": 245,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 231,
                "end": 245,
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 220,
          "end": 223,
          "decorators": [],
          "name": "foo",
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
