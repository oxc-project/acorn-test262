__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "typeArguments": null,
                  "start": 32,
                  "end": 33
                },
                "start": 29,
                "end": 33
              },
              "start": 26,
              "end": 33
            },
            "start": 24,
            "end": 33
          },
          "start": 22,
          "end": 33
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 36,
          "end": 37
        },
        "start": 34,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 48
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e2",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 52
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e3",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 56
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 57
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 69,
                      "end": 70
                    },
                    {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "\"hi\"",
                      "start": 72,
                      "end": 76
                    },
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 78,
                      "end": 82
                    }
                  ],
                  "start": 68,
                  "end": 83
                },
                "id": null,
                "generator": false,
                "start": 62,
                "end": 83
              }
            ],
            "optional": false,
            "start": 60,
            "end": 84
          },
          "definite": false,
          "start": 45,
          "end": 84
        }
      ],
      "declare": false,
      "start": 39,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
