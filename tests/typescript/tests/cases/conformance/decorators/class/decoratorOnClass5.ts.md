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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 43,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 43,
          "params": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 36,
                  "end": 37,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            ]
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 64,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 46,
          "end": 52,
          "expression": {
            "type": "CallExpression",
            "start": 47,
            "end": 52,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
