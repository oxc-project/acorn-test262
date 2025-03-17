__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "Err",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 110,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 97,
                          "end": 98,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 101,
                          "end": 102,
                          "raw": "3",
                          "value": 3
                        },
                        {
                          "type": "Literal",
                          "start": 103,
                          "end": 104,
                          "raw": "3",
                          "value": 3
                        },
                        {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "raw": "4",
                          "value": 4
                        },
                        {
                          "type": "Literal",
                          "start": 107,
                          "end": 109,
                          "raw": "56",
                          "value": 56
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 91,
                        "end": 96
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 132,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 132,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 132,
                        "decorators": [],
                        "name": "unknown",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 157,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 141,
                      "end": 157,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 147,
                        "end": 156,
                        "raw": "'unknown'",
                        "value": "unknown"
                      }
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
            "start": 168,
            "end": 220,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 214,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 195,
                      "end": 213,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 207,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 207,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 210,
                        "end": 213,
                        "raw": "\"!\"",
                        "value": "!"
                      }
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
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 232,
            "end": 273,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 271,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 239,
                  "end": 271,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 242,
                    "end": 271,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 252,
                        "end": 265,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 265,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 252,
                            "end": 257
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 265,
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
