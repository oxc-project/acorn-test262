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
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "start": 27,
            "end": 32
          },
          "start": 26,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            },
            "start": 40,
            "end": 46
          },
          "start": 35,
          "end": 46
        },
        "start": 33,
        "end": 46
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
            },
            "start": 75,
            "end": 80
          },
          "start": 74,
          "end": 80
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 88,
              "end": 94
            },
            "start": 88,
            "end": 94
          },
          "start": 83,
          "end": 94
        },
        "start": 81,
        "end": 94
      },
      "body": null,
      "expression": false,
      "start": 48,
      "end": 95
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 133
                  },
                  "typeArguments": null,
                  "start": 118,
                  "end": 133
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 151
                  },
                  "typeArguments": null,
                  "start": 136,
                  "end": 151
                }
              ],
              "start": 118,
              "end": 151
            },
            "start": 116,
            "end": 151
          },
          "start": 115,
          "end": 151
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 154,
          "end": 158
        },
        "start": 152,
        "end": 158
      },
      "body": null,
      "expression": false,
      "start": 96,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 170
          }
        ],
        "optional": false,
        "start": 160,
        "end": 171
      },
      "directive": null,
      "start": 160,
      "end": 172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 183
          }
        ],
        "optional": false,
        "start": 173,
        "end": 184
      },
      "directive": null,
      "start": 173,
      "end": 185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
