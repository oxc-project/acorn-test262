stringLiteralsAssertionsInEqualityComparisons02.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 204,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1,
      "end": 54,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
        "decorators": [],
        "name": "EnhancedString",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 23,
        "end": 53,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 23,
            "end": 29
          },
          {
            "type": "TSTypeLiteral",
            "start": 32,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 34,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 46,
                  "decorators": [],
                  "name": "enhancements",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 48,
                    "end": 51
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 64,
            "end": 88,
            "operator": "===",
            "left": {
              "type": "Literal",
              "start": 64,
              "end": 69,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 74,
              "end": 88,
              "expression": {
                "type": "Literal",
                "start": 74,
                "end": 79,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 83,
                "end": 88,
                "literal": {
                  "type": "Literal",
                  "start": 83,
                  "end": 88,
                  "raw": "\"baz\"",
                  "value": "baz"
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 124,
            "operator": "!==",
            "left": {
              "type": "Literal",
              "start": 98,
              "end": 103,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 109,
              "end": 123,
              "expression": {
                "type": "Literal",
                "start": 109,
                "end": 114,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 118,
                "end": 123,
                "literal": {
                  "type": "Literal",
                  "start": 118,
                  "end": 123,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 134,
            "end": 158,
            "operator": "==",
            "left": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 144,
              "end": 157,
              "expression": {
                "type": "Literal",
                "start": 152,
                "end": 157,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 168,
            "end": 203,
            "operator": "===",
            "left": {
              "type": "Literal",
              "start": 168,
              "end": 173,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 179,
              "end": 202,
              "expression": {
                "type": "Literal",
                "start": 179,
                "end": 184,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 202,
                  "decorators": [],
                  "name": "EnhancedString",
                  "optional": false
                }
              }
            }
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
