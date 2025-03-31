__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
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
          "start": 13,
          "end": 27,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 27,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 27,
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 19,
                "end": 25
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 53,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 211,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 155,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 149,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 84,
                      "end": 148,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 113,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 103,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 105,
                            "end": 113,
                            "callee": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 111,
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
                          "start": 127,
                          "end": 138,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 133,
                            "end": 138,
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
            "start": 161,
            "end": 209,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 162,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 168,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 177,
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
              "start": 178,
              "end": 209,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 209,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 191,
                    "end": 203,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 198,
                      "end": 202
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
      "start": 213,
      "end": 240,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 239,
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 216,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 217,
            "end": 238,
            "argument": {
              "type": "NewExpression",
              "start": 220,
              "end": 238,
              "callee": {
                "type": "Identifier",
                "start": 224,
                "end": 238,
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
