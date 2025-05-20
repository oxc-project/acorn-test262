__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 20,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "raw": "0",
                "value": 0
              }
            }
          }
        }
      ],
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
            "raw": "0",
            "value": 0
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 21,
      "end": 41,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "raw": "1",
                "value": 1
              }
            }
          }
        }
      ],
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
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 80,
      "async": false,
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 61,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 82,
          "end": 85,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 88,
          "end": 89,
          "raw": "2",
          "value": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
