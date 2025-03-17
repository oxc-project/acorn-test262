__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 16,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 22,
              "end": 25,
              "elementType": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 23,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 43,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 29,
            "end": 41,
            "argument": {
              "type": "MemberExpression",
              "start": 36,
              "end": 40,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "type": "ClassDeclaration",
      "start": 44,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 64,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 222,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 88,
                    "end": 160,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 95,
                      "end": 159,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 109,
                          "end": 124,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 114,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 116,
                            "end": 124,
                            "callee": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 138,
                          "end": 149,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 142,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 144,
                            "end": 149,
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
            "start": 172,
            "end": 220,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 173,
              "end": 188,
              "object": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 188,
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
              "start": 189,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 192,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 214,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 209,
                      "end": 213
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
      "type": "ClassDeclaration",
      "start": 224,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 245,
        "name": "_StringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 246,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 341,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 256,
              "end": 341,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 259,
                "end": 341,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 269,
                    "end": 335,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 276,
                      "end": 334,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 290,
                          "end": 299,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 295,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 297,
                            "end": 299,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 313,
                          "end": 324,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 317,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 319,
                            "end": 324,
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
            "start": 347,
            "end": 395,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 348,
              "end": 363,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 363,
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
              "start": 364,
              "end": 395,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 395,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 377,
                    "end": 389,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 384,
                      "end": 388
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
      "type": "ExpressionStatement",
      "start": 399,
      "end": 450,
      "expression": {
        "type": "CallExpression",
        "start": 399,
        "end": 449,
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 402,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 403,
            "end": 424,
            "argument": {
              "type": "NewExpression",
              "start": 406,
              "end": 424,
              "callee": {
                "type": "Identifier",
                "start": 410,
                "end": 424,
                "name": "SymbolIterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          },
          {
            "type": "SpreadElement",
            "start": 426,
            "end": 448,
            "argument": {
              "type": "NewExpression",
              "start": 429,
              "end": 448,
              "callee": {
                "type": "Identifier",
                "start": 433,
                "end": 448,
                "name": "_StringIterator",
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
