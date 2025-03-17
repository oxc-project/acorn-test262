__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "name": "maybeArray",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 37,
      "end": 141,
      "test": {
        "type": "CallExpression",
        "start": 41,
        "end": 66,
        "callee": {
          "type": "MemberExpression",
          "start": 41,
          "end": 54,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "name": "isArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 55,
            "end": 65,
            "name": "maybeArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "name": "maybeArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 91,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 112,
                "end": 130,
                "object": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 122,
                  "name": "maybeArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 130,
                  "name": "toFixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
