__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 167,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
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
          "type": "ObjectPattern",
          "start": 15,
          "end": 65,
          "properties": [
            {
              "type": "Property",
              "start": 17,
              "end": 18,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 20,
              "end": 21,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 23,
              "end": 24,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 29,
              "end": 65,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 31,
                  "end": 41,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 63,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 56,
                      "end": 63
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
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
          "type": "RestElement",
          "start": 81,
          "end": 95,
          "argument": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 95,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 90,
              "end": 95,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 90,
                "end": 93
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 101,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 133,
        "callee": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 107,
            "end": 132,
            "properties": [
              {
                "type": "Property",
                "start": 109,
                "end": 114,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 112,
                  "end": 114,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 116,
                "end": 120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 119,
                  "end": 120,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 122,
                "end": 130,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 130,
                  "value": false,
                  "raw": "false"
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
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 166,
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 140,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 142,
                "end": 150,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 145,
                  "end": 150,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 152,
                "end": 156,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 158,
                "end": 163,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 161,
                  "end": 163,
                  "value": "",
                  "raw": "\"\""
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
