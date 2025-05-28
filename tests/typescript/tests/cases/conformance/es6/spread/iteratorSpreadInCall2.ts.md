__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
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
          "end": 24,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 24,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 16,
              "end": 24,
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 16,
                "end": 22
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 29,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 208,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 50,
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
        "start": 51,
        "end": 208,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 146,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 145,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 95,
                          "end": 110,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 102,
                            "end": 110,
                            "callee": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 108,
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
                          "start": 124,
                          "end": 135,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 128,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 130,
                            "end": 135,
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
            "start": 158,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 159,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 165,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 174,
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
              "start": 175,
              "end": 206,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 206,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 200,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 195,
                      "end": 199
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
      "start": 210,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 236,
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 214,
            "end": 235,
            "argument": {
              "type": "NewExpression",
              "start": 217,
              "end": 235,
              "callee": {
                "type": "Identifier",
                "start": 221,
                "end": 235,
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
