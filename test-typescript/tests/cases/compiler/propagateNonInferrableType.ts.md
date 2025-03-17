__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "resolver",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 42,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 32,
          "end": 42,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 42,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 38,
              "end": 42
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 44,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 73,
        "name": "wrapResolver",
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
          "start": 77,
          "end": 105,
          "name": "resolverFunction",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 105,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 95,
              "end": 105,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 98,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 101,
                  "end": 105
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 112,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 108,
          "end": 112
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 146,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 145,
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 127,
          "name": "wrapResolver",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "LogicalExpression",
            "start": 128,
            "end": 144,
            "left": {
              "type": "CallExpression",
              "start": 128,
              "end": 138,
              "callee": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "name": "resolver",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "start": 142,
              "end": 144,
              "elements": []
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
