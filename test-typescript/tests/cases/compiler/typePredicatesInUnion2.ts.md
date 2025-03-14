typePredicatesInUnion2.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "isString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 35,
          "end": 46,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 73,
        "decorators": [],
        "name": "isNumber",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 80,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 81,
        "end": 94,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 83,
          "end": 94,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 151,
          "decorators": [],
          "name": "p",
          "optional": false,
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
                    "decorators": [],
                    "name": "isString",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeQuery",
                  "start": 136,
                  "end": 151,
                  "exprName": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 151,
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 162,
            "end": 170,
            "decorators": [],
            "name": "isString",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 184,
        "arguments": [
          {
            "type": "Identifier",
            "start": 175,
            "end": 183,
            "decorators": [],
            "name": "isNumber",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
