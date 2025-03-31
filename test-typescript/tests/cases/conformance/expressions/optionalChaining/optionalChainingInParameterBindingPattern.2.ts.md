__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 70,
                    "end": 83,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 81,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ]
              }
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
      "start": 110,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 150,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 147,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 112,
              "end": 132,
              "properties": [
                {
                  "type": "Property",
                  "start": 114,
                  "end": 130,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "ChainExpression",
                    "start": 115,
                    "end": 121,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 115,
                      "end": 121,
                      "object": {
                        "type": "CallExpression",
                        "start": 115,
                        "end": 118,
                        "callee": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    }
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 124,
                    "end": 130,
                    "left": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 128,
                      "end": 130,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 137,
            "end": 147,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 139,
                "end": 145,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 143,
                    "end": 144,
                    "id": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 163,
            "end": 165,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 209,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 168,
          "end": 206,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 169,
              "end": 184,
              "properties": [
                {
                  "type": "Property",
                  "start": 171,
                  "end": 182,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "ChainExpression",
                    "start": 172,
                    "end": 178,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 172,
                      "end": 178,
                      "object": {
                        "type": "CallExpression",
                        "start": 172,
                        "end": 175,
                        "callee": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    }
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 186,
              "end": 191,
              "left": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 196,
            "end": 206,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 198,
                "end": 204,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 202,
                    "end": 203,
                    "id": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
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
