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
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "name": "first",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "name": "last",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "name": "dice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 187,
                "end": 222,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 193,
                  "end": 222,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 193,
                    "end": 203,
                    "object": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 197,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "name": "floor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 221,
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "name": "random",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 221,
                        "value": 6,
                        "raw": "6"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 226,
          "end": 247,
          "expression": {
            "type": "AssignmentExpression",
            "start": 226,
            "end": 246,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 226,
              "end": 236,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 230,
                "name": "dice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 239,
              "end": 246,
              "value": "Rando",
              "raw": "'Rando'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 252,
          "end": 277,
          "expression": {
            "type": "AssignmentExpression",
            "start": 252,
            "end": 276,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 252,
              "end": 261,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "name": "dice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "name": "last",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 276,
              "value": "Calrissian",
              "raw": "'Calrissian'"
            }
          },
          "directive": null
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
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 299,
                "name": "diceP",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 291,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 299,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 299,
                      "name": "Person",
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
                "type": "Identifier",
                "start": 302,
                "end": 306,
                "name": "dice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
