__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 15,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 15,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 14,
              "end": 15,
              "literal": {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 0,
                "raw": "0"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 16,
        "end": 19,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 19,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 19,
            "value": 0,
            "raw": "0"
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 21,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 36,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 35,
              "end": 36,
              "literal": {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "value": 1,
                "raw": "1"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 40,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 39,
          "end": 40,
          "literal": {
            "type": "Literal",
            "start": 39,
            "end": 40,
            "value": 1,
            "raw": "1"
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 61,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 61,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 56,
              "end": 61,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 56,
                  "end": 57,
                  "literal": {
                    "type": "Literal",
                    "start": 56,
                    "end": 57,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 60,
                  "end": 61,
                  "literal": {
                    "type": "Literal",
                    "start": 60,
                    "end": 61,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 80,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 69,
            "end": 78,
            "argument": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 82,
          "end": 85,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 88,
          "end": 89,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
