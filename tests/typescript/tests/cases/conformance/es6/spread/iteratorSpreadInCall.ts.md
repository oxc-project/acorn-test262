__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 27,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 27,
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
          "end": 22,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 206,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
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
              "start": 59,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 150,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 72,
                    "end": 144,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 79,
                      "end": 143,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 93,
                          "end": 108,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 98,
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
                            "start": 100,
                            "end": 108,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 106,
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
                          "start": 122,
                          "end": 133,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 126,
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
                            "start": 128,
                            "end": 133,
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
            "start": 156,
            "end": 204,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 157,
              "end": 172,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 157,
                "end": 163,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 172,
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
              "start": 173,
              "end": 204,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 198,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 193,
                      "end": 197
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
        "start": 34,
        "end": 48,
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
      "start": 208,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 234,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 212,
            "end": 233,
            "argument": {
              "type": "NewExpression",
              "start": 215,
              "end": 233,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 233,
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
          "start": 208,
          "end": 211,
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
