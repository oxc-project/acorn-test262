__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
          "start": 13,
          "end": 46,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 46,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 16,
              "end": 46,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 18,
                  "end": 29,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 20,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 30,
                  "end": 44,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 34,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 53,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 49,
          "end": 53
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 73,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 72,
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 59,
            "end": 71,
            "properties": [
              {
                "type": "Property",
                "start": 61,
                "end": 69,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 63,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 69,
                  "value": 1234,
                  "raw": "1234"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 128,
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 100,
            "end": 127,
            "properties": [
              {
                "type": "Property",
                "start": 102,
                "end": 110,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 106,
                  "end": 110,
                  "value": 1234,
                  "raw": "1234"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 112,
                "end": 125,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 116,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 118,
                  "end": 125,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 167,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 141,
            "end": 166,
            "properties": [
              {
                "type": "Property",
                "start": 143,
                "end": 151,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 145,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 147,
                  "end": 151,
                  "value": 1234,
                  "raw": "1234"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 153,
                "end": 164,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 164,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 224,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 223,
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 205,
            "end": 222,
            "properties": [
              {
                "type": "Property",
                "start": 207,
                "end": 220,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 213,
                  "end": 220,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
