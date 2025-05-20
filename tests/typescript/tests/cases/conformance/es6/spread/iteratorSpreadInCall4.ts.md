__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 44,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
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
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 23,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 17,
              "end": 23
            }
          }
        },
        {
          "type": "RestElement",
          "start": 25,
          "end": 39,
          "argument": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 39,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 31,
              "end": 39,
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 31,
                "end": 37
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
      "type": "ClassDeclaration",
      "start": 45,
      "end": 223,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
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
              "start": 76,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 167,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 89,
                    "end": 161,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 96,
                      "end": 160,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 110,
                          "end": 125,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 115,
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
                            "start": 117,
                            "end": 125,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 123,
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
                          "start": 139,
                          "end": 150,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 143,
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
                            "start": 145,
                            "end": 150,
                            "raw": "false",
                            "value": false
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
            "start": 173,
            "end": 221,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 174,
              "end": 189,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 180,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 189,
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
              "start": 190,
              "end": 221,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 221,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 203,
                    "end": 215,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 210,
                      "end": 214
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
        "start": 51,
        "end": 65,
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
      "start": 225,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 251,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 229,
            "end": 250,
            "argument": {
              "type": "NewExpression",
              "start": 232,
              "end": 250,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 236,
                "end": 250,
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
          "start": 225,
          "end": 228,
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
