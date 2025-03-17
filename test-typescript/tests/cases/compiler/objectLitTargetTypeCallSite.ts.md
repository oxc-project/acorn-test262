__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "process",
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
          "start": 18,
          "end": 42,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 42,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 22,
                  "end": 31,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 32,
                  "end": 41,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 47,
            "end": 58,
            "argument": {
              "type": "MemberExpression",
              "start": 54,
              "end": 57,
              "object": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 85,
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "name": "process",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 70,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 71,
                "end": 77,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 73,
                  "end": 77,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 78,
                "end": 83,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 83,
                  "value": "y",
                  "raw": "\"y\""
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
