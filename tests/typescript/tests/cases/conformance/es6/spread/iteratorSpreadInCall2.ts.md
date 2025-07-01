__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 16,
                "end": 22
              },
              "start": 16,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "start": 13,
          "end": 24
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 26,
        "end": 29
      },
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 50
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 100
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 102,
                              "end": 108
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 102,
                            "end": 110
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 95,
                          "end": 110
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 128
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 130,
                            "end": 135
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 124,
                          "end": 135
                        }
                      ],
                      "start": 81,
                      "end": 145
                    },
                    "start": 74,
                    "end": 146
                  }
                ],
                "start": 64,
                "end": 152
              },
              "expression": false,
              "start": 61,
              "end": 152
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 152
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 165
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 159,
              "end": 174
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 195,
                      "end": 199
                    },
                    "start": 188,
                    "end": 200
                  }
                ],
                "start": 178,
                "end": 206
              },
              "expression": false,
              "start": 175,
              "end": 206
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 158,
            "end": 206
          }
        ],
        "start": 51,
        "end": 208
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 213
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [],
              "start": 217,
              "end": 235
            },
            "start": 214,
            "end": 235
          }
        ],
        "optional": false,
        "start": 210,
        "end": 236
      },
      "directive": null,
      "start": 210,
      "end": 237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 237
}
```
