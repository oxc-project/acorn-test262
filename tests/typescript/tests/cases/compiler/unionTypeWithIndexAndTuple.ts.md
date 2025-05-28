__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 39,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 32,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 26,
                    "end": 32
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 61,
              "decorators": [],
              "name": "someOtherProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 99,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 99,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 90,
              "end": 99,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 90,
                  "end": 95,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 91,
                      "end": 94,
                      "literal": {
                        "type": "Literal",
                        "start": 91,
                        "end": 94,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 98,
                  "end": 99,
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 114,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 113,
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 107,
            "end": 112,
            "elements": [
              {
                "type": "Literal",
                "start": 108,
                "end": 111,
                "value": "a",
                "raw": "\"a\""
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
