__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "isString",
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
          "start": 26,
          "end": 32,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
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
        "start": 33,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 35,
          "end": 46,
          "parameterName": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 46,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 48,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 73,
        "name": "isNumber",
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
          "start": 74,
          "end": 80,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 80,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
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
        "start": 81,
        "end": 94,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 83,
          "end": 94,
          "parameterName": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 94,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 88,
              "end": 94
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "f",
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
          "start": 115,
          "end": 151,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 151,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 118,
              "end": 151,
              "types": [
                {
                  "type": "TSTypeQuery",
                  "start": 118,
                  "end": 133,
                  "exprName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 133,
                    "name": "isString",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeQuery",
                  "start": 136,
                  "end": 151,
                  "exprName": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 151,
                    "name": "isNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
        "start": 152,
        "end": 158,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 154,
          "end": 158
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 172,
      "expression": {
        "type": "CallExpression",
        "start": 160,
        "end": 171,
        "callee": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 162,
            "end": 170,
            "name": "isString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 184,
        "callee": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 175,
            "end": 183,
            "name": "isNumber",
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
