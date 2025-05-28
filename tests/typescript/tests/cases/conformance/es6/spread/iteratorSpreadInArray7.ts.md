__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 178,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
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
        "start": 21,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 122,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 116,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 51,
                      "end": 115,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 65,
                          "end": 80,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 72,
                            "end": 80,
                            "callee": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
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
                          "start": 94,
                          "end": 105,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 98,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 105,
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
            "start": 128,
            "end": 176,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 129,
              "end": 144,
              "object": {
                "type": "Identifier",
                "start": 129,
                "end": 135,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 144,
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
              "start": 145,
              "end": 176,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 176,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 158,
                    "end": 170,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
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
      "type": "VariableDeclaration",
      "start": 180,
      "end": 200,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 199,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 199,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 191,
                "end": 199,
                "elementType": {
                  "type": "TSSymbolKeyword",
                  "start": 191,
                  "end": 197
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 238,
        "callee": {
          "type": "MemberExpression",
          "start": 201,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 206,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 213,
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 214,
            "end": 237,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 215,
                "end": 236,
                "argument": {
                  "type": "NewExpression",
                  "start": 218,
                  "end": 236,
                  "callee": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 236,
                    "decorators": [],
                    "name": "SymbolIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                }
              }
            ]
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
