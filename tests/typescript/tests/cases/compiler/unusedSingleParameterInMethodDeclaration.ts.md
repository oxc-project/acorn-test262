__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 81,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "decorators": [],
              "name": "greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 81,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 59,
                    "end": 75,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 63,
                        "end": 74,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 69,
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 72,
                          "end": 74,
                          "raw": "20",
                          "value": 20
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 33,
                  "end": 47,
                  "decorators": [],
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
