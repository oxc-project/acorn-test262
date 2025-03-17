__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 26,
      "end": 91,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 60,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 60,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            }
          }
        },
        {
          "type": "Identifier",
          "start": 62,
          "end": 77,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 77,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 67,
              "end": 77,
              "exprName": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 78,
        "end": 90,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 80,
          "end": 90,
          "exprName": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 92,
      "end": 166,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 114,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 115,
          "end": 135,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 116,
              "end": 119,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 135,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 122,
              "end": 135,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 123,
                  "end": 134,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 137,
          "end": 152,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 142,
              "end": 152,
              "exprName": {
                "type": "Identifier",
                "start": 149,
                "end": 152,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 165,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 155,
          "end": 165,
          "exprName": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
