__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "decorator",
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
          "start": 19,
          "end": 25,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 33,
            "end": 49,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 40,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 134,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 72,
            "end": 132,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 104,
              "end": 132,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 114,
                  "end": 126,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "YieldExpression",
                    "start": 118,
                    "end": 125,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 72,
                "end": 91,
                "expression": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 91,
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 83,
                      "end": 90,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 89,
                        "end": 90,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
