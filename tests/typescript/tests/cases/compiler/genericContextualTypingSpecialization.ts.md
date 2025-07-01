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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 7,
                  "end": 13
                },
                "start": 7,
                "end": 15
              },
              "start": 5,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 25
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          ],
          "start": 25,
          "end": 33
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "id": null,
            "generator": false,
            "start": 34,
            "end": 49
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 51,
            "end": 52
          }
        ],
        "optional": false,
        "start": 17,
        "end": 53
      },
      "directive": null,
      "start": 17,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
