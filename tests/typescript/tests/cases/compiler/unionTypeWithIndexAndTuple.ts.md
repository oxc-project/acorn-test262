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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 39,
            "accessibility": null,
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 61,
              "decorators": [],
              "name": "someOtherProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
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
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 98,
                  "end": 99,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 113,
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
                "raw": "\"a\"",
                "value": "a"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
