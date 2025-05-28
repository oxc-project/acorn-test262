__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "EnhancedString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 22,
        "end": 52,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSTypeLiteral",
            "start": 31,
            "end": 52,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 33,
                "end": 50,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 45,
                  "decorators": [],
                  "name": "enhancements",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 47,
                    "end": 50
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
      "start": 55,
      "end": 88,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 63,
            "end": 87,
            "left": {
              "type": "Literal",
              "start": 63,
              "end": 68,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "start": 73,
              "end": 87,
              "expression": {
                "type": "Literal",
                "start": 73,
                "end": 78,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 82,
                "end": 87,
                "literal": {
                  "type": "Literal",
                  "start": 82,
                  "end": 87,
                  "value": "baz",
                  "raw": "\"baz\""
                }
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 97,
            "end": 123,
            "left": {
              "type": "Literal",
              "start": 97,
              "end": 102,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "start": 108,
              "end": 122,
              "expression": {
                "type": "Literal",
                "start": 108,
                "end": 113,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 117,
                "end": 122,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 122,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 133,
            "end": 157,
            "left": {
              "type": "Literal",
              "start": 133,
              "end": 138,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "start": 143,
              "end": 156,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              },
              "expression": {
                "type": "Literal",
                "start": 151,
                "end": 156,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 203,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 167,
            "end": 202,
            "left": {
              "type": "Literal",
              "start": 167,
              "end": 172,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "start": 178,
              "end": 201,
              "expression": {
                "type": "Literal",
                "start": 178,
                "end": 183,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 201,
                  "decorators": [],
                  "name": "EnhancedString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
