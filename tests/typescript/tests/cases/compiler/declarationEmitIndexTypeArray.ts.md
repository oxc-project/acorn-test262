__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomethingWithKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 28
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 30
          }
        ],
        "start": 28,
        "end": 31
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 39
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 49
                  },
                  "typeArguments": null,
                  "start": 48,
                  "end": 49
                },
                "start": 42,
                "end": 49
              },
              "start": 41,
              "end": 52
            },
            "start": 39,
            "end": 52
          },
          "value": null,
          "start": 32,
          "end": 52
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 54,
        "end": 57
      },
      "expression": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "utilityFunctions",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 81
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doSomethingWithKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 107
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doSomethingWithKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 107
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 107
              }
            ],
            "start": 84,
            "end": 109
          },
          "definite": false,
          "start": 65,
          "end": 109
        }
      ],
      "declare": false,
      "start": 59,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
