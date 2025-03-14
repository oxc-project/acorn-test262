excessPropertyCheckWithEmptyObject.ts
```json
{
  "type": "Program",
  "start": 61,
  "end": 351,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 136,
        "arguments": [
          {
            "type": "Identifier",
            "start": 83,
            "end": 89,
            "decorators": [],
            "name": "window",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 97,
            "raw": "\"prop\"",
            "value": "prop"
          },
          {
            "type": "ObjectExpression",
            "start": 99,
            "end": 135,
            "properties": [
              {
                "type": "Property",
                "start": 101,
                "end": 116,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 108,
                  "end": 116,
                  "raw": "\"v1.0.0\"",
                  "value": "v1.0.0"
                }
              },
              {
                "type": "Property",
                "start": 118,
                "end": 133,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "decorators": [],
                  "name": "readonly",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 128,
                  "end": 133,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 82,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 67,
            "decorators": [],
            "name": "Object",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "decorators": [],
            "name": "defineProperty",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 165,
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 163,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 230,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 230,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 213,
                "end": 230,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 230,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 225,
                      "end": 230,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 226,
                          "end": 229
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 225,
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 233,
            "end": 242,
            "properties": [
              {
                "type": "Property",
                "start": 235,
                "end": 240,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 240,
                  "raw": "10",
                  "value": 10
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 245,
      "end": 263,
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 263,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 260,
        "decorators": [],
        "name": "Empty",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 332,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 332,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 311,
                "end": 332,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 316,
                      "decorators": [],
                      "name": "Empty",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 319,
                    "end": 332,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 321,
                        "end": 330,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 322,
                          "end": 330,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 324,
                            "end": 330
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 335,
            "end": 349,
            "properties": [
              {
                "type": "Property",
                "start": 337,
                "end": 347,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 340,
                  "end": 347,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
