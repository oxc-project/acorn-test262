__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
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
        "end": 42,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 29,
            "end": 40,
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
      "start": 43,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 63,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 165,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 165,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 159,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 94,
                      "end": 158,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 108,
                          "end": 123,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 113,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 115,
                            "end": 123,
                            "callee": {
                              "type": "Identifier",
                              "start": 115,
                              "end": 121,
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
                          "start": 137,
                          "end": 148,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 141,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 143,
                            "end": 148,
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
            "start": 171,
            "end": 219,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 172,
              "end": 187,
              "object": {
                "type": "Identifier",
                "start": 172,
                "end": 178,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 187,
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
              "start": 188,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 219,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 201,
                    "end": 213,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 208,
                      "end": 212
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
      "start": 223,
      "end": 250,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 249,
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 226,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 227,
            "end": 248,
            "argument": {
              "type": "NewExpression",
              "start": 230,
              "end": 248,
              "callee": {
                "type": "Identifier",
                "start": 234,
                "end": 248,
                "name": "SymbolIterator",
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
