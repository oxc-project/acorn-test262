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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 14
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 16,
                  "end": 19
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 19
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 21,
                  "end": 22
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 32
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 24,
                  "end": 34
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 21,
                "end": 34
              }
            ],
            "start": 8,
            "end": 36
          },
          "definite": false,
          "start": 4,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 54,
                            "end": 60
                          },
                          "start": 52,
                          "end": 60
                        },
                        "start": 48,
                        "end": 60
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 63,
                        "end": 69
                      },
                      "start": 61,
                      "end": 69
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 47,
                    "end": 69
                  }
                ],
                "start": 45,
                "end": 71
              },
              "start": 43,
              "end": 71
            },
            "start": 42,
            "end": 71
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "definite": false,
          "start": 42,
          "end": 75
        }
      ],
      "declare": false,
      "start": 38,
      "end": 76
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
