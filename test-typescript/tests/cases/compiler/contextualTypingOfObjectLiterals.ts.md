contextualTypingOfObjectLiterals.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 34,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10,
                "end": 34,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 12,
                    "end": 32,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 13,
                        "end": 22,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14,
                          "end": 22,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 16,
                            "end": 22
                          }
                        }
                      }
                    ],
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
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "obj2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 54,
            "properties": [
              {
                "type": "Property",
                "start": 48,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 66,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 60,
          "decorators": [],
          "name": "obj1",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 63,
          "end": 65,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 77,
          "decorators": [],
          "name": "obj1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 80,
          "end": 84,
          "decorators": [],
          "name": "obj2",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 157,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 132,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 134,
              "end": 157,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 136,
                  "end": 155,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 146,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 146,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 140,
                          "end": 146
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 170,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 169,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 166,
            "end": 168,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 184,
        "arguments": [
          {
            "type": "Identifier",
            "start": 179,
            "end": 183,
            "decorators": [],
            "name": "obj1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 199,
        "arguments": [
          {
            "type": "Identifier",
            "start": 194,
            "end": 198,
            "decorators": [],
            "name": "obj2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
