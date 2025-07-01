__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 22,
                    "end": 23
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    },
                    "start": 23,
                    "end": 30
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 22,
                  "end": 31
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    },
                    "start": 33,
                    "end": 40
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 32,
                  "end": 41
                }
              ],
              "start": 21,
              "end": 42
            },
            "start": 19,
            "end": 42
          },
          "start": 18,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "optional": false,
              "computed": false,
              "start": 54,
              "end": 57
            },
            "start": 47,
            "end": 58
          }
        ],
        "start": 44,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "process",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 73,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "\"y\"",
                  "start": 80,
                  "end": 83
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 78,
                "end": 83
              }
            ],
            "start": 70,
            "end": 84
          }
        ],
        "optional": false,
        "start": 62,
        "end": 85
      },
      "directive": null,
      "start": 62,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
