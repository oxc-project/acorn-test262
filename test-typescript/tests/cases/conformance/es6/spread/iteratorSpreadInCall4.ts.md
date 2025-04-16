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
          "end": 23,
          "name": "s1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 23,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 17,
              "end": 23
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 25,
          "end": 39,
          "argument": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 65,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 167,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 115,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 125,
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 123,
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
                          "start": 139,
                          "end": 150,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 143,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 145,
                            "end": 150,
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
            "start": 173,
            "end": 221,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 174,
              "end": 189,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 180,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 189,
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
              "start": 190,
              "end": 221,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
