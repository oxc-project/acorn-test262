__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "used",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 38
                  },
                  "readonly": false,
                  "static": false,
                  "start": 26,
                  "end": 38
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 54,
                          "end": 58
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "used",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 65
                        },
                        "definite": false,
                        "start": 54,
                        "end": 65
                      }
                    ],
                    "declare": false,
                    "start": 50,
                    "end": 66
                  }
                ],
                "start": 40,
                "end": 72
              },
              "expression": false,
              "start": 25,
              "end": 72
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 72
          }
        ],
        "start": 8,
        "end": 74
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
