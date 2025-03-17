__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 279,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "name": "ReturnVal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 68,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 48,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "name": "something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 88,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "name": "ReturnVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 102,
                  "name": "something",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 102,
                  "end": 108,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 105,
                    "end": 108,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 140,
            "name": "val",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "name": "ReturnVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "name": "run",
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
          "start": 155,
          "end": 196,
          "name": "options",
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
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 175,
                    "name": "something",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 187,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 179,
                        "end": 187,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 181,
                          "end": 187
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 219,
                  "name": "something",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 222,
                  "end": 256,
                  "left": {
                    "type": "MemberExpression",
                    "start": 222,
                    "end": 239,
                    "object": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 229,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 239,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "start": 243,
                    "end": 256,
                    "object": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 246,
                      "name": "val",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 256,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 276,
            "expression": {
              "type": "CallExpression",
              "start": 262,
              "end": 275,
              "callee": {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "name": "something",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 272,
                  "end": 274,
                  "value": "",
                  "raw": "''"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
