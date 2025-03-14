objectLiteralShorthandPropertiesFunctionArgument.ts
```json
{
  "type": "Program",
  "start": 14,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 36,
            "raw": "10000",
            "value": 10000
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 54,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
            "raw": "\"my name\"",
            "value": "my name"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "decorators": [],
            "name": "person",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 82,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 84,
                "end": 88,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 90,
                "end": 92,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "decorators": [],
                  "name": "id",
                  "optional": false
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
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 141,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 113,
              "end": 141,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 115,
                  "end": 128,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 119,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 129,
                  "end": 139,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
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
      "start": 147,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 158,
        "arguments": [
          {
            "type": "Identifier",
            "start": 151,
            "end": 157,
            "decorators": [],
            "name": "person",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 150,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 172,
            "end": 194,
            "properties": [
              {
                "type": "Property",
                "start": 174,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 184,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 186,
                "end": 192,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 188,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "decorators": [],
                  "name": "id",
                  "optional": false
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
  "sourceType": "script"
}
```
