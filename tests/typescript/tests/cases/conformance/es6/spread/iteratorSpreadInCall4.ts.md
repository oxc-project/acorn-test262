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
      "typeParameters": null,
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
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
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
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 223,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 167,
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
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 167,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 115,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 125,
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 123,
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
                          "start": 139,
                          "end": 150,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 143,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 145,
                            "end": 150,
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
            "start": 173,
            "end": 221,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 174,
              "end": 189,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 180,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 189,
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
              "start": 190,
              "end": 221,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 225,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 251,
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 228,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 229,
            "end": 250,
            "argument": {
              "type": "NewExpression",
              "start": 232,
              "end": 250,
              "callee": {
                "type": "Identifier",
                "start": 236,
                "end": 250,
                "decorators": [],
                "name": "SymbolIterator",
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
