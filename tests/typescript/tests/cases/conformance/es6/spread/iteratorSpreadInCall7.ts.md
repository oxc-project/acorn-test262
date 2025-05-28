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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 16,
          "end": 25,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 222,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 64,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 222,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 114,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 116,
                            "end": 124,
                            "callee": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 122,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 138,
                          "end": 149,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 142,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 144,
                            "end": 149,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 220,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 173,
              "end": 188,
              "object": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 188,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 189,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 224,
      "end": 397,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 245,
        "decorators": [],
        "name": "_StringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 246,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 341,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 256,
              "end": 341,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 295,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 297,
                            "end": 299,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 313,
                          "end": 324,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 317,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 319,
                            "end": 324,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 347,
            "end": 395,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 348,
              "end": 363,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 363,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 395,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
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
                "decorators": [],
                "name": "_StringIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
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
