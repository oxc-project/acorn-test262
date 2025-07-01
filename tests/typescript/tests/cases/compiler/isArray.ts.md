__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    },
                    "start": 25,
                    "end": 33
                  }
                ],
                "start": 16,
                "end": 33
              },
              "start": 14,
              "end": 33
            },
            "start": 4,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "optional": false,
          "computed": false,
          "start": 41,
          "end": 54
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 65
          }
        ],
        "optional": false,
        "start": 41,
        "end": 66
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybeArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 84
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 74,
              "end": 91
            },
            "directive": null,
            "start": 74,
            "end": 92
          }
        ],
        "start": 68,
        "end": 100
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 122
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 130
                },
                "optional": false,
                "computed": false,
                "start": 112,
                "end": 130
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 112,
              "end": 132
            },
            "directive": null,
            "start": 112,
            "end": 133
          }
        ],
        "start": 106,
        "end": 141
      },
      "start": 37,
      "end": 141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 141
}
```
