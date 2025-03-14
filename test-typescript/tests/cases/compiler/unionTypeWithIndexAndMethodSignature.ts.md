unionTypeWithIndexAndMethodSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 73,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 73,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 43,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 35,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 42,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 38,
                "end": 42
              }
            },
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 48,
            "end": 71,
            "parameters": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 60,
                "decorators": [],
                "name": "key",
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
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 70,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 63,
                "end": 70
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Options",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 126,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 118,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 118,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 102,
              "end": 118,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
                },
                {
                  "type": "TSTypeReference",
                  "start": 111,
                  "end": 118,
                  "typeName": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 118,
                    "decorators": [],
                    "name": "Options",
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
        "start": 119,
        "end": 125,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 147,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 129,
            "end": 146,
            "properties": [
              {
                "type": "Property",
                "start": 135,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 136,
                  "end": 143,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 140,
                    "end": 143,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 128,
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
