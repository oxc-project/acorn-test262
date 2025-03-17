__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 34,
            "name": "ohno",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 34,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 18,
                "end": 34,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "ff",
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
          "start": 56,
          "end": 65,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 74,
        "end": 82,
        "callee": {
          "type": "Identifier",
          "start": 74,
          "end": 76,
          "name": "ff",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "name": "ohno",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
