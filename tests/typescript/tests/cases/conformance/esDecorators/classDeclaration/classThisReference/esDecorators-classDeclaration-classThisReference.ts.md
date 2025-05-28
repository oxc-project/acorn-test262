__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 182,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 182,
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
                },
                "directive": null
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 89,
            "end": 119,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 111,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 108,
                "end": 111
              }
            },
            "value": {
              "type": "ThisExpression",
              "start": 114,
              "end": 118
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 144,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 144,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 144,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 137,
                    "end": 142,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 137,
                      "end": 141
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 149,
            "end": 180,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 180,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 180,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 166,
                    "end": 178,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 173,
                      "end": 177
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
