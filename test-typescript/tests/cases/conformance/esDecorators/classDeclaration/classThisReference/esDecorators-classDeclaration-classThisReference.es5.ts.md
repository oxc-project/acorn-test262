__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 147,
        "body": [
          {
            "type": "StaticBlock",
            "start": 42,
            "end": 58,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 51,
                "end": 56,
                "expression": {
                  "type": "ThisExpression",
                  "start": 51,
                  "end": 55
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
              }
            },
            "value": {
              "type": "ThisExpression",
              "start": 79,
              "end": 83
            }
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 109,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 109,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 107,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 102,
                      "end": 106
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 145,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 131,
                    "end": 143,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 138,
                      "end": 142
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 27,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
