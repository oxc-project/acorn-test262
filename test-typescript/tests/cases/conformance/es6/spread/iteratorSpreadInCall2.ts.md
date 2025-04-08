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
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "name": "s",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 50,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 208,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 102,
                            "end": 110,
                            "callee": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 108,
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
                          "start": 124,
                          "end": 135,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 128,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 130,
                            "end": 135,
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
            "start": 158,
            "end": 206,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 159,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 165,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 174,
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
              "start": 175,
              "end": 206,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
