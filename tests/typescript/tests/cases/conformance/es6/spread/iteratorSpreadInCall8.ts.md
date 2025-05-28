__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 459,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 45,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 31,
                  "end": 40,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 37,
                      "end": 40,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 37,
                        "end": 38,
                        "typeName": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
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
                "start": 42,
                "end": 45,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
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
      "start": 49,
      "end": 227,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 69,
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
        "start": 70,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 171,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 93,
                    "end": 165,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 100,
                      "end": 164,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 114,
                          "end": 129,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 119,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 121,
                            "end": 129,
                            "callee": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 127,
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
                          "start": 143,
                          "end": 154,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 147,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 149,
                            "end": 154,
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
            "start": 177,
            "end": 225,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 178,
              "end": 193,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 184,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 193,
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
              "start": 194,
              "end": 225,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 225,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
      "start": 229,
      "end": 402,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 250,
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
        "start": 251,
        "end": 402,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 346,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 261,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 261,
              "end": 346,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 346,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 274,
                    "end": 340,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 281,
                      "end": 339,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 295,
                          "end": 304,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 295,
                            "end": 300,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 302,
                            "end": 304,
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
                          "start": 318,
                          "end": 329,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 322,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 324,
                            "end": 329,
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
            "start": 352,
            "end": 400,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 353,
              "end": 368,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 359,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 360,
                "end": 368,
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
              "start": 369,
              "end": 400,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 372,
                "end": 400,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 382,
                    "end": 394,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 389,
                      "end": 393
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
      "start": 404,
      "end": 459,
      "expression": {
        "type": "NewExpression",
        "start": 404,
        "end": 458,
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 411,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 412,
            "end": 433,
            "argument": {
              "type": "NewExpression",
              "start": 415,
              "end": 433,
              "callee": {
                "type": "Identifier",
                "start": 419,
                "end": 433,
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
            "start": 435,
            "end": 457,
            "argument": {
              "type": "NewExpression",
              "start": 438,
              "end": 457,
              "callee": {
                "type": "Identifier",
                "start": 442,
                "end": 457,
                "decorators": [],
                "name": "_StringIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
