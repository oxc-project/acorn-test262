__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 45,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 30,
                  "end": 36,
                  "argument": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 36,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 45,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "name": "Super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 142,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 118,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 111,
                          "name": "that",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 136,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 135,
                      "callee": {
                        "type": "Super",
                        "start": 128,
                        "end": 133
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
