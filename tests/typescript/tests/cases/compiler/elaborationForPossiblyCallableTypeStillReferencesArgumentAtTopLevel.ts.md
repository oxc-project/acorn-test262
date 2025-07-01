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
            "name": "ohno",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  },
                  "start": 25,
                  "end": 34
                },
                "start": 18,
                "end": 34
              },
              "start": 16,
              "end": 34
            },
            "start": 12,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 34
        }
      ],
      "declare": true,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            },
            "start": 57,
            "end": 65
          },
          "start": 56,
          "end": 65
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        },
        "start": 66,
        "end": 72
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ohno",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          }
        ],
        "optional": false,
        "start": 74,
        "end": 82
      },
      "directive": null,
      "start": 74,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
