__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              },
              "start": 59,
              "end": 65
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 48,
            "end": 66
          }
        ],
        "start": 42,
        "end": 68
      },
      "declare": false,
      "start": 22,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 88
                },
                "typeArguments": null,
                "start": 79,
                "end": 88
              },
              "start": 77,
              "end": 88
            },
            "start": 76,
            "end": 88
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 102
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
                    "body": [],
                    "start": 105,
                    "end": 108
                  },
                  "expression": false,
                  "start": 102,
                  "end": 108
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 93,
                "end": 108
              }
            ],
            "start": 91,
            "end": 110
          },
          "definite": false,
          "start": 76,
          "end": 110
        }
      ],
      "declare": false,
      "start": 70,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 140
                },
                "typeArguments": null,
                "start": 131,
                "end": 140
              },
              "start": 129,
              "end": 140
            },
            "start": 126,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 140
        }
      ],
      "declare": true,
      "start": 112,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 154
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 175
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 181,
                          "end": 187
                        },
                        "start": 179,
                        "end": 187
                      },
                      "start": 177,
                      "end": 187
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 190,
                      "end": 194
                    },
                    "start": 188,
                    "end": 194
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 166,
                  "end": 194
                }
              ],
              "start": 164,
              "end": 196
            },
            "start": 162,
            "end": 196
          },
          "start": 155,
          "end": 196
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 219
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 229
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 239
                    },
                    "optional": false,
                    "computed": false,
                    "start": 222,
                    "end": 239
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 246
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 256
                    },
                    "optional": false,
                    "computed": false,
                    "start": 243,
                    "end": 256
                  },
                  "start": 222,
                  "end": 256
                },
                "definite": false,
                "start": 210,
                "end": 256
              }
            ],
            "declare": false,
            "start": 204,
            "end": 257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 271
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 272,
                  "end": 274
                }
              ],
              "optional": false,
              "start": 262,
              "end": 275
            },
            "directive": null,
            "start": 262,
            "end": 276
          }
        ],
        "start": 198,
        "end": 278
      },
      "expression": false,
      "start": 142,
      "end": 278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 278
}
```
