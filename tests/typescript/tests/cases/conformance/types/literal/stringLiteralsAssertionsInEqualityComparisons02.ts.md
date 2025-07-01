__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnhancedString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "enhancements",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 45
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 47,
                    "end": 50
                  },
                  "start": 45,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 33,
                "end": 50
              }
            ],
            "start": 31,
            "end": 52
          }
        ],
        "start": 22,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 63,
              "end": 68
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 73,
                "end": 78
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 82,
                  "end": 87
                },
                "start": 82,
                "end": 87
              },
              "start": 73,
              "end": 87
            },
            "start": 63,
            "end": 87
          },
          "definite": false,
          "start": 59,
          "end": 87
        }
      ],
      "declare": false,
      "start": 55,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 97,
              "end": 102
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 108,
                "end": 113
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 117,
                  "end": 122
                },
                "start": 117,
                "end": 122
              },
              "start": 108,
              "end": 122
            },
            "start": 97,
            "end": 123
          },
          "definite": false,
          "start": 93,
          "end": 123
        }
      ],
      "declare": false,
      "start": 89,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 133,
              "end": 138
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              },
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 151,
                "end": 156
              },
              "start": 143,
              "end": 156
            },
            "start": 133,
            "end": 157
          },
          "definite": false,
          "start": 129,
          "end": 157
        }
      ],
      "declare": false,
      "start": 125,
      "end": 158
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 167,
              "end": 172
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 178,
                "end": 183
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnhancedString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 201
                },
                "typeArguments": null,
                "start": 187,
                "end": 201
              },
              "start": 178,
              "end": 201
            },
            "start": 167,
            "end": 202
          },
          "definite": false,
          "start": 163,
          "end": 202
        }
      ],
      "declare": false,
      "start": 159,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
