__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 312,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 168,
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "BlockStatement",
      "start": 170,
      "end": 311,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 174,
          "end": 223,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 180,
              "end": 222,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 187,
                "end": 222,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 193,
                  "end": 222,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 221,
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 221,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 193,
                    "end": 203,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 197,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 226,
          "end": 247,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 226,
            "end": 246,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 226,
              "end": 236,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 230,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 239,
              "end": 246,
              "raw": "'Rando'",
              "value": "Rando"
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 252,
          "end": 277,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 252,
            "end": 276,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 252,
              "end": 261,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 276,
              "raw": "'Calrissian'",
              "value": "Calrissian"
            }
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 280,
          "end": 307,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 286,
              "end": 306,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 299,
                "decorators": [],
                "name": "diceP",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 291,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 299,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 299,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 302,
                "end": 306,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
