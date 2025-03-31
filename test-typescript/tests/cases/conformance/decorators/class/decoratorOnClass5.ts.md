__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 43,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 43,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
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
          "params": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "name": "target",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 36,
                  "end": 37,
                  "typeName": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 43,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 43,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 64,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 46,
          "end": 52,
          "expression": {
            "type": "CallExpression",
            "start": 47,
            "end": 52,
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
