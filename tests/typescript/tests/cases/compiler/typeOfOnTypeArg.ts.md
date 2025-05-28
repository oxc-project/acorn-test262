__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 17,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 15,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 10,
                  "end": 12,
                  "value": "",
                  "raw": "''"
                },
                "value": {
                  "type": "Literal",
                  "start": 14,
                  "end": 15,
                  "value": 3,
                  "raw": "3"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 33,
        "decorators": [],
        "name": "fill",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 44,
              "end": 52,
              "exprName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 64,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "decorators": [],
          "name": "fill",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 72,
            "end": 74,
            "value": 32,
            "raw": "32"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
