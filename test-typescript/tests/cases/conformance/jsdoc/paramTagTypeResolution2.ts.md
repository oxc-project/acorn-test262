__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 163,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 162,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 118,
            "end": 127,
            "properties": [
              {
                "type": "Property",
                "start": 120,
                "end": 125,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
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
                  "start": 123,
                  "end": 125,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 129,
            "end": 161,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 159,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 132,
                  "end": 159,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 140,
                    "end": 159,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 142,
                        "end": 157,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 142,
                          "end": 157,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 142,
                            "end": 155,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 147,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 155,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 133,
                      "end": 138,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
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
