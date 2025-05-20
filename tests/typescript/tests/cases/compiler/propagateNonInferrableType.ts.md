__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "resolver",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 42,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 32,
          "end": 42,
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
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 44,
      "end": 113,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 73,
        "decorators": [],
        "name": "wrapResolver",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 105,
          "decorators": [],
          "name": "resolverFunction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 105,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 95,
              "end": 105,
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 112,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 108,
          "end": 112
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 145,
        "arguments": [
          {
            "type": "LogicalExpression",
            "start": 128,
            "end": 144,
            "operator": "||",
            "left": {
              "type": "CallExpression",
              "start": 128,
              "end": 138,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "resolver",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "ArrayExpression",
              "start": 142,
              "end": 144,
              "elements": []
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 127,
          "decorators": [],
          "name": "wrapResolver",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
