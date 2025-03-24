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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 26,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "name": "test1",
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
          "start": 49,
          "end": 60,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 60,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 62,
          "end": 77,
          "name": "bar",
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
                "name": "foo",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 92,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 114,
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 115,
          "end": 135,
          "properties": [
            {
              "type": "Property",
              "start": 116,
              "end": 119,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 137,
          "end": 152,
          "name": "bar",
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
                "name": "foo",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
