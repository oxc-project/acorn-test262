__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 154,
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
      "end": 154,
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
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 152,
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
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 152,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 103,
                    "end": 116,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 104,
                      "end": 114,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ThisExpression",
                        "start": 110,
                        "end": 114
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 138,
                    "end": 146,
                    "expression": {
                      "type": "CallExpression",
                      "start": 138,
                      "end": 145,
                      "callee": {
                        "type": "Super",
                        "start": 138,
                        "end": 143
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
