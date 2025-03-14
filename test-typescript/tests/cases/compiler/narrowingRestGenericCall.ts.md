narrowingRestGenericCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Slugs",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 125,
            "expression": {
              "type": "CallExpression",
              "start": 117,
              "end": 124,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 123,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "call",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 89,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 91,
          "end": 111,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 111,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 95,
              "end": 111,
              "params": [
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 101,
                      "end": 102,
                      "typeName": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 107,
                  "end": 111
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 81,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 75,
              "end": 81
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 151,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 151,
                  "decorators": [],
                  "name": "Slugs",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 213,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 212,
        "arguments": [
          {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 163,
            "end": 211,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 183,
              "end": 211,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 187,
                  "end": 209,
                  "expression": {
                    "type": "CallExpression",
                    "start": 187,
                    "end": 208,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 199,
                        "end": 207,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 203,
                          "decorators": [],
                          "name": "rest",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 207,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 198,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 194,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 198,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 164,
                "end": 178,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 165,
                    "end": 168,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 170,
                    "end": 177,
                    "argument": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 177,
                      "decorators": [],
                      "name": "rest",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 153,
          "end": 157,
          "decorators": [],
          "name": "call",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
