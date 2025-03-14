isArray.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "decorators": [],
            "name": "maybeArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 33,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 16,
                "end": 33,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSArrayType",
                    "start": 25,
                    "end": 33,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
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
      "type": "IfStatement",
      "start": 37,
      "end": 141,
      "alternate": {
        "type": "BlockStatement",
        "start": 106,
        "end": 141,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 112,
            "end": 133,
            "expression": {
              "type": "CallExpression",
              "start": 112,
              "end": 132,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 112,
                "end": 130,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 122,
                  "decorators": [],
                  "name": "maybeArray",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 130,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 68,
        "end": 100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 92,
            "expression": {
              "type": "MemberExpression",
              "start": 74,
              "end": 91,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "decorators": [],
                "name": "maybeArray",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 91,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 41,
        "end": 66,
        "arguments": [
          {
            "type": "Identifier",
            "start": 55,
            "end": 65,
            "decorators": [],
            "name": "maybeArray",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 41,
          "end": 54,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "isArray",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
