__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 69,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 69,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 13,
          "end": 63,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 15,
              "end": 16,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 18,
              "end": 19,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 21,
              "end": 22,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 63,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 27,
              "end": 63,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 39,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 51,
                  "end": 61,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 54,
                      "end": 61
                    }
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
      "start": 71,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 101,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 75,
            "end": 100,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 82,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 84,
                "end": 88,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 90,
                "end": 98,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 93,
                  "end": 98,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 134,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 108,
            "end": 133,
            "properties": [
              {
                "type": "Property",
                "start": 110,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 113,
                  "end": 118,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Property",
                "start": 120,
                "end": 124,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 123,
                  "end": 124,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 126,
                "end": 131,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 129,
                  "end": 131,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 107,
          "decorators": [],
          "name": "foo",
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
