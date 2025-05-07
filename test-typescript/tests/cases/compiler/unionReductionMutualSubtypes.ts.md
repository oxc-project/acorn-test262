__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 278,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 68,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 48,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 88,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 88,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 91,
            "end": 110,
            "properties": [
              {
                "type": "Property",
                "start": 93,
                "end": 108,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 102,
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 102,
                  "end": 108,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 105,
                    "end": 108,
                    "body": []
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
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 140,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 140,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 278,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 278,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 257,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 210,
                "end": 256,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 219,
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 222,
                  "end": 256,
                  "operator": "??",
                  "left": {
                    "type": "MemberExpression",
                    "start": 222,
                    "end": 239,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 229,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 239,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 243,
                    "end": 256,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 246,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 256,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 276,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 262,
              "end": 275,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 272,
                  "end": 274,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 196,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 164,
              "end": 196,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 166,
                  "end": 194,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 175,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": true,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 187,
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 179,
                        "end": 187,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 181,
                          "end": 187
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 188,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 190,
                      "end": 194
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
