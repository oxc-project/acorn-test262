__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 15,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 7,
                  "end": 13
                }
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
      "type": "ExpressionStatement",
      "start": 17,
      "end": 54,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 17,
        "end": 53,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 34,
            "end": 49,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 44,
              "end": 49,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "Literal",
            "start": 51,
            "end": 52,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 17,
          "end": 25,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 25,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 25,
          "end": 33,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
