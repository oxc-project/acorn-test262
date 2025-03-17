__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
        "name": "EnhancedString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 46,
                  "name": "enhancements",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 48,
                    "end": 51
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 64,
            "end": 88,
            "left": {
              "type": "Literal",
              "start": 64,
              "end": 69,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "start": 74,
              "end": 88,
              "expression": {
                "type": "Literal",
                "start": 74,
                "end": 79,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 83,
                "end": 88,
                "literal": {
                  "type": "Literal",
                  "start": 83,
                  "end": 88,
                  "value": "baz",
                  "raw": "\"baz\""
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 124,
            "left": {
              "type": "Literal",
              "start": 98,
              "end": 103,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "start": 109,
              "end": 123,
              "expression": {
                "type": "Literal",
                "start": 109,
                "end": 114,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 118,
                "end": 123,
                "literal": {
                  "type": "Literal",
                  "start": 118,
                  "end": 123,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 134,
            "end": 158,
            "left": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "start": 144,
              "end": 157,
              "expression": {
                "type": "Literal",
                "start": 152,
                "end": 157,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 168,
            "end": 203,
            "left": {
              "type": "Literal",
              "start": 168,
              "end": 173,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "start": 179,
              "end": 202,
              "expression": {
                "type": "Literal",
                "start": 179,
                "end": 184,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 202,
                  "name": "EnhancedString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
