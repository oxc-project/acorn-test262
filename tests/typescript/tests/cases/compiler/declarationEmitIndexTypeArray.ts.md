__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "decorators": [],
        "name": "doSomethingWithKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 32,
          "end": 52,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 52,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 41,
              "end": 52,
              "elementType": {
                "type": "TSTypeOperator",
                "start": 42,
                "end": 49,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 48,
                  "end": 49,
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 57,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 110,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 81,
            "decorators": [],
            "name": "utilityFunctions",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 84,
            "end": 109,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 107,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 107,
                  "decorators": [],
                  "name": "doSomethingWithKeys",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 107,
                  "decorators": [],
                  "name": "doSomethingWithKeys",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
