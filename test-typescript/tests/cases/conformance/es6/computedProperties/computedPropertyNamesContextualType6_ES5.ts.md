__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 38,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 36,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "name": "foo",
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
          "start": 64,
          "end": 73,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 70,
                "end": 73,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 71,
                    "end": 72,
                    "typeName": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 83,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 89,
                "end": 94,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 94,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 112,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 100,
                  "end": 101,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 103,
                  "end": 112,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 109,
                    "end": 112,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 118,
                "end": 138,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 131,
                  "left": {
                    "type": "Literal",
                    "start": 119,
                    "end": 123,
                    "value": "hi",
                    "raw": "\"hi\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 126,
                    "end": 131,
                    "value": "bye",
                    "raw": "\"bye\""
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 144,
                "end": 154,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 145,
                  "end": 150,
                  "left": {
                    "type": "Literal",
                    "start": 145,
                    "end": 146,
                    "value": 0,
                    "raw": "0"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 154,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 160,
                "end": 172,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 161,
                  "end": 166,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 162,
                    "end": 166,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 169,
                  "end": 172,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "value": 0,
                      "raw": "0"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
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
